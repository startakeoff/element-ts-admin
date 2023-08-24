<script lang="ts" setup>
import AppMain from './AppMain/AppMain.vue'
import SideBar from './SideBar/SideBar.vue'
</script>

<template>
    <el-container class="h-100%">
        <el-aside b-r="1 solid #ccc" width="240px">
            <SideBar></SideBar>
        </el-aside>
        <el-container>
            <el-header b-b="1 solid #ccc" height="50px">Header</el-header>
            <el-main>
                <AppMain></AppMain>
            </el-main>
        </el-container>
    </el-container>
</template>

<style lang="scss" scoped></style>
