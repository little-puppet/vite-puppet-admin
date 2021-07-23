/*
 * @Description:
 * @Author: ZY
 * @Date: 2020-12-07 10:30:20
 * @LastEditors: ZY
 * @LastEditTime: 2021-01-27 20:10:59
 */
import {createRouter, createWebHashHistory, RouteRecordRaw} from 'vue-router'

// const  Layout = () => import('@/layout/Index.vue')
import Layout from "@/layout/Index.vue";
import {isExternal} from "@/utils/validate";

let constantModules: Array<RouteRecordRaw> = [
    {
        path: '/login',
        name: 'Login',
        component: () => import('@/views/common/login/index.vue')
    },
    {
        path: '/blank',
        name: 'blank',
        component: Layout
    }
]

let permissionModules: Array<RouteRecordRaw> = []

export const constantRoutes: Array<RouteRecordRaw> = [
    {
        path: '/redirect',
        component: () => import('@/views/Home.vue'),
        meta: {hidden: true},
        children: [
            {
                path: '/redirect/:path(.*)',

                component: () => import('@/views/Home.vue')
            }
        ]
    },
    // {
    //   path: '/',
    //   component: Layout,
    //   redirect: '/dashboard',
    //   children: [
    //     {
    //       path: '/dashboard',
    //       component: () => import(/* webpackChunkName: "dashboard" */ '@/views/dashboard/index.vue'),
    //       name: 'Dashboard',
    //       meta: {
    //         title: 'dashboard',
    //         icon: 'dashboard',
    //         affix: true
    //       }
    //     }
    //   ]
    // },
    ...constantModules
]

export const asyncRoutes: Array<RouteRecordRaw> = [...permissionModules]
const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
})

export function resetRouter() {
    (router as any).matcher = (router as any).matcher
}

export function addRouters(routes: RouteRecordRaw[]) {
    routes.forEach((item) => {

        const name = item.name

        // 不是http路径 且路由不包含同名
        if (!isExternal(item.path) && name != undefined && !router.hasRoute(name)) {
            router.addRoute(item)
        }

    })
}

export default router
