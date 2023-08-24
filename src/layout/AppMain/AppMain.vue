<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const key = computed(() => {
    return route.path
})
</script>

<template>
    <div>
        <router-view v-slot="{ Component }">
            <transition name="el-fade-in" mode="out-in">
                <keep-alive>
                    <component :is="Component" :key="key" />
                </keep-alive>
            </transition>
        </router-view>
    </div>
</template>

<style lang="scss" scoped></style>
