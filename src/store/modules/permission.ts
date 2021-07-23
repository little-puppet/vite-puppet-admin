import {Action, getModule, Module, Mutation, VuexModule} from 'vuex-module-decorators'
import {RouteComponent, RouteMeta, RouteRecordRaw} from 'vue-router'
import {addRouters, asyncRoutes, constantRoutes} from '@/router'
import store from '@/store'
import {localVuex} from '@/utils/vuexLocal'
import {userMenuRequest} from '@/apis/menu'
import {MenuModel} from '@/models/menuModel'
import {isExternal} from '@/utils/validate'
import Layout from "@/layout/Index.vue";
import ERROE404 from "@/views/common/404.vue";
import ROUTER_VIEW from "@/views/common/routerView.vue";
import config from '@/config'

const hasPermission = (roles: string[], route: RouteRecordRaw) => {
  if (route.meta && route.meta.roles) {
    return roles.some((role) => {
      if (route.meta?.roles !== undefined && Array.isArray(route.meta.roles)) {
        return route.meta.roles.includes(role)
      }
    })
  } else {
    return true
  }
}

export const filterAsyncRoutes = (routes: RouteRecordRaw[], roles: string[]) => {
  const res: RouteRecordRaw[] = []
  routes.forEach((route) => {
    const r = {...route}
    if (hasPermission(roles, r)) {
      if (r.children) {
        r.children = filterAsyncRoutes(r.children, roles)
      }
      res.push(r)
    }
  })
  return res
}

export interface IPermissionState {
  routes: RouteRecordRaw[]
  dynamicRoutes: RouteRecordRaw[]
}

@Module({dynamic: true, store, namespaced: true, name: 'permission'})
class Permission extends VuexModule implements IPermissionState {
  public routes: RouteRecordRaw[] = []
  public dynamicRoutes: RouteRecordRaw[] = []

  @Mutation
  private SET_ROUTES(routes: RouteRecordRaw[]) {
    this.routes = constantRoutes.concat(routes)
    this.dynamicRoutes = routes
  }

  @Action
  public async GenerateRoutes(roles: string[]) {
    let accessedRoutes
    const modules = import.meta.glob('/src/views/**/*.vue')

    var map = new Map();
    Object.keys(modules).forEach((c: string) => {
      map.set(c, modules[c])
    })

    const menuToRoutes: (basePath: string, menus: MenuModel[]) => RouteRecordRaw[] = (
      basePath: string = "/",
      menus: MenuModel[]
    ) => {
      const routes: RouteRecordRaw[] = []

      for (const menu of menus) {
        if (!menu.component) {
          menu.component = ''
        }
        let component: RouteComponent;
        let path = ''
        if (isExternal(menu.path)) {
          path = menu.path
          component = Layout
        } else {
          if (basePath == "/") {
            component = Layout
            path = '/' + menu.path.replace('/', '')

            if (!menu.children) {
              menu.children = [{...menu, path: path + "/" + 'index'}]
            }
          } else {
            path = basePath + "/" + menu.path.replace('/', '')
            if (!menu.children || (menu.component && menu.component != '')) {
              component = map.get("/src/views" + menu.component + ".vue")
              if (component == undefined) {
                component = ERROE404
              }
            } else {
              component = ROUTER_VIEW
            }
          }
        }
        const route: RouteRecordRaw = {
          path: path,
          name: menu.name,
          component: component
        }
        const meta: RouteMeta = {}
        meta.title = menu.name
        meta.icon = menu.icon
        route.meta = meta

        if (menu.children && menu.children.length > 0) {
          route.children = [...menuToRoutes(route.path, menu.children)]
          route.redirect = route.children[0].path
        }
        routes.push(route)
      }
      return routes
    }

    let routeAccess: RouteRecordRaw[] = [];

    if (config.app.getApiRouter) {
      await userMenuRequest()
        .then(async (res) => {
          if (res?.code === 0 && res.data.length > 0) {
            routeAccess = [...menuToRoutes("/", res.data)]
            // this.SET_ROUTES(accessedRoutes)
            if (roles.includes('admin')) {
              accessedRoutes = asyncRoutes
            } else {
              accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
            }
            // accessedRoutes = routeAccess
            if (accessedRoutes === undefined) {
              accessedRoutes = asyncRoutes
            }
            accessedRoutes = accessedRoutes.concat(routeAccess)

            // 默认跳转第一个页面
            accessedRoutes = accessedRoutes.concat([{
              name:'/',
              path: '/',
              component: Layout,
              redirect: accessedRoutes[0].path
            }])
            this.SET_ROUTES(accessedRoutes)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    } else {
      if (roles.includes('admin')) {
        accessedRoutes = asyncRoutes
      } else {
        accessedRoutes = filterAsyncRoutes(asyncRoutes, roles)
      }
      if (accessedRoutes === undefined) {
        accessedRoutes = asyncRoutes
      }
      addRouters(accessedRoutes)
      this.SET_ROUTES(accessedRoutes)
    }


  }
}

export const PermissionStore = getModule(Permission)
