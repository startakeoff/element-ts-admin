import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
//? element-plus按需导入
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
//? 引入Unocss
import Unocss from 'unocss/vite';
import { presetUno, presetAttributify, presetIcons } from 'unocss'
//? 图标按需导入
import Icons from 'unplugin-icons/vite'
import IconsResolver from 'unplugin-icons/resolver'

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        AutoImport({
            imports: ['vue'], //? 自动导入 Vue 相关函数，如：ref, reactive, toRef 等
            resolvers: [
                ElementPlusResolver(), //? 自动导入 Element Plus 组件
                IconsResolver(),
            ],
            dts: fileURLToPath(new URL('./src/types/auto-imports.d.ts', import.meta.url)) //? auto-imports.d.ts文件存储的位置
        }),
        Components({
            resolvers: [
                ElementPlusResolver(), //? 自动注册 Element Plus 组件
                IconsResolver()
            ],
            dts: fileURLToPath(new URL('./src/types/components.d.ts', import.meta.url)) //? components.d.ts文件存储的位置
        }),
        Icons({
            autoInstall: true,
        }),
        Unocss({ //? 使用Unocss
            presets: [
                presetUno(),
                presetAttributify(),
                presetIcons()
            ],
        })
    ],
    resolve: {
        alias: {
            '@': fileURLToPath(new URL('./src', import.meta.url))
        }
    },
    server: {
        port: 12581
    }
})
