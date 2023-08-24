/// <reference types="vite/client" />

//? 找不到.vue模块报错解决
declare module '*.vue' {
    import type { DefineComponent } from 'vue'
    const component: DefineComponent<{}, {}, any>
    export default component
}
