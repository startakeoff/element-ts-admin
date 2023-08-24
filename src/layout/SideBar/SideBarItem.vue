<script lang="ts" setup>
import { computed } from 'vue'
import { type RouteRecordRaw } from 'vue-router'
import path from 'path-browserify'

interface Props {
    route: RouteRecordRaw
    basePath: string
}

const props = withDefaults(defineProps<Props>(), {
    basePath: ''
})

//? 是否始终显示根菜单
const menuShow = computed(() => props.route.meta?.menuShow)

//? 当前菜单下的子菜单
const showMenu = computed(() => {
    return props.route.children?.filter((menu) => !menu.meta?.hidden) ?? []
})

//? 当前菜单下是否还有子目录
const isOnlyOneMenu = computed(() => {
    const number = showMenu.value.length
    switch (true) {
        case number == 1:
            return showMenu.value[0]
        default:
            return { ...props.route, path: '' }
    }
})

//? 解析路径
const contactPath = (routePath: string) => {
    return path.resolve(props.basePath, routePath)
}
</script>

<template>
    <div>
        <el-menu-item
            v-if="!menuShow && isOnlyOneMenu && !isOnlyOneMenu.children"
            :index="contactPath(isOnlyOneMenu.path)"
        >
            <template #title>{{ isOnlyOneMenu.meta?.title }}</template>
        </el-menu-item>

        <el-sub-menu v-else :index="contactPath(props.route.path)">
            <template #title>{{ props.route.meta?.title }}</template>
            <template v-if="props.route.children">
                <SideBarItem
                    v-for="route in props.route.children"
                    :key="route.path"
                    :route="route"
                    :basePath="contactPath(route.path)"
                ></SideBarItem>
            </template>
        </el-sub-menu>
    </div>
</template>

<style lang="scss" scoped>
.el-menu-item {
    height: 50px;
}

:deep(.el-sub-menu__title) {
    height: 50px;
}
</style>
