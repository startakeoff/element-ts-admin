import router from '@/router'
import { usePermissionStore } from '@/stores/modules/permission'

const permissionStore = usePermissionStore()
//? 进度条
import NProgress from "nprogress"
import "nprogress/nprogress.css"

router.beforeEach((to, from, next) => {
    NProgress.start()

    permissionStore.setRoutes()

    permissionStore.dynamicRoutes.forEach((route) => {
        router.addRoute(route)
    })
    next({ ...to, replace: true })
})

router.afterEach(() => {
    NProgress.done()
})