import { type RouteRecordRaw, createRouter, createWebHashHistory } from 'vue-router'

const Layout = () => import('@/layout/index.vue')

//? 静态路由
export const constantRoutes: RouteRecordRaw[] = [
    {
        path: '/',
        component: Layout,
        redirect: '/home',
        children: [
            {
                path: 'home',
                component: () => import('@/views/Home/Home.vue'),
                name: 'Home',
                meta: {
                    title: '首页',
                }
            }
        ]
    },
    {
        path: '/login',
        component: () => import('@/views/Login/Login.vue'),
        meta: {
            hidden: true
        }
    }
]

//? 动态路由
export const asyncRoutes: RouteRecordRaw[] = [
    {
        path: "/permission",
        component: Layout,
        redirect: "/permission/index",
        meta: {
            title: "权限管理",
            menuShow: true
        },
        children: [
            {
                path: "index",
                component: () => import("@/views/Permission/Permission.vue"),
                name: "Permission",
                meta: {
                    title: "页面权限",
                }
            }
        ]
    },
    {
        path: "/table",
        component: Layout,
        redirect: "/table/table1",
        meta: {
            title: "表格",
        },
        children: [
            {
                path: "table1",
                component: () => import("@/views/Table/Table.vue"),
                name: "Table1",
                meta: {
                    title: "表格1",
                }
            },
            {
                path: "table2",
                component: () => import("@/views/Table/Table2.vue"),
                name: "Table2",
                meta: {
                    title: "表格2",
                }
            }
        ]
    }
]

const router = createRouter({
    history: createWebHashHistory(),
    routes: constantRoutes
})

export default router
