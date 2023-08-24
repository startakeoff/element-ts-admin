<script lang="ts" setup>
import SideBarItem from './SideBarItem.vue'
import { usePermissionStore } from '@/stores/modules/permission'

const permissionStore = usePermissionStore()

console.log(permissionStore.routes)
</script>

<template>
    <div class="side-bar">
        <el-scrollbar>
            <el-menu router :unique-opened="true" class="select-none">
                <SideBarItem
                    v-for="route in permissionStore.routes"
                    :key="route.path"
                    :route="route"
                    :base-path="route.path"
                ></SideBarItem>
            </el-menu>
        </el-scrollbar>
    </div>
</template>

<style lang="scss" scoped>
.side-bar {
    overflow: auto;
    height: 100%;
    .el-menu {
        border-right: 0;
    }
}
</style>
