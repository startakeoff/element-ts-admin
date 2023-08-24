import { asyncRoutes, constantRoutes } from "@/router";
import { defineStore } from "pinia";
import { type RouteRecordRaw } from "vue-router";

export const usePermissionStore = defineStore('permission', () => {
    const routes = ref<RouteRecordRaw[]>([])
    const dynamicRoutes = ref<RouteRecordRaw[]>([])
    // 配置动态路由
    const setRoutes = () => {
        const accessedRoutes = asyncRoutes
        routes.value = constantRoutes.concat(accessedRoutes).filter(route => !route.meta?.hidden)
        dynamicRoutes.value = accessedRoutes
    }
    return { routes, dynamicRoutes, setRoutes }
})

