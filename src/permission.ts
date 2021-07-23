/*
 * @Description: 权限
 * @Author: ZY
 * @Date: 2020-12-28 09:12:46
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-27 19:36:01
 */

import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
// import { useI18n } from 'vue-i18n'
import router, {addRouters} from '@/router'
import { RouteLocationNormalized } from 'vue-router'

import { ElMessage } from 'element-plus'
import conifg from '@/config'
import {UserStore} from "@/store/modules/user";
import {PermissionStore} from "@/store/modules/permission";
NProgress.configure({ showSpinner: false })
UserStore.ClearRoles()

router.beforeEach(async (to: RouteLocationNormalized, _: RouteLocationNormalized, next: any) => {
  // Start progress bar
  NProgress.start()
  // Determine whether the user has logged in
  if (UserStore.token) {
    if (to.path === '/login') {
      // If is logged in, redirect to the home page
      next({ path: '/' })
      NProgress.done()
    } else {
      // Check whether the user has obtained his permission roles
      if (UserStore.roles.length === 0) {
        try {
          // Note: roles must be a object array! such as: ['admin'] or ['developer', 'editor']
          await UserStore.GetUserInfo()
          const roles = UserStore.roles
          // Generate accessible routes map based on role
           await PermissionStore.GenerateRoutes(roles)
          // Dynamically add accessible routes
          addRouters(PermissionStore.dynamicRoutes)
          // Hack: ensure addRoutes is complete
          // Set the replace: true, so the navigation will not leave a history record
          next({ ...to, replace: true })
        } catch (err) {
          // Remove token and redirect to login page
          UserStore.ResetToken()
          ElMessage.error(err || 'Has Error')
          next(`/login?redirect=${to.path}`)
          NProgress.done()
        }
      } else {
        next()
      }
    }
  } else {
    // Has no token
    if (conifg.router.whiteList.indexOf(to.path) !== -1) {
      // In the free login whitelist, go directly
      next()
    } else {
      // Other pages that do not have permission to access are redirected to the login page.
      next(`/login?redirect=${to.path}`)
      NProgress.done()
    }
  }
})

router.afterEach((to: RouteLocationNormalized) => {

  // Finish progress bar
  // hack: https://github.com/PanJiaChen/vue-element-admin/pull/2939
  NProgress.done()

  // set page title
  // document.title = getPageTitle(to.meta.title)
})
