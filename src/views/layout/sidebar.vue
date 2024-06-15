<template>
  <div class="sidebar">
    <el-menu
      router
      :collapse="settingState.collapse"
      active-text-color="#ffd04b"
      background-color="#545c64"
      text-color="#fff"
    >
      <menu-recursion v-for="item in menusData" :key="item.id" :menuItem="item"></menu-recursion>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { menusData } from './menu'
import { useSettingStore } from '@/stores/settingStore'

const settingStore = useSettingStore()
const settingState = settingStore.state

import menuRecursion from './menuRecursion.vue'
</script>

<style scoped lang="less">
.sidebar {
  color: #e8e6e3;
  padding: 0 !important;
}
:deep(.el-menu) {
  background-color: #0096aa;
  border-right: 0px;
}

:deep(.el-sub-menu__title:hover) {
  background-color: #516272;
}

:deep(.el-menu-item:hover) {
  background-color: #879794;
}

:deep(.el-menu--collapse) {
  width: 60px;
}
.sidebar:not(.el-menu--collapse) {
  width: 240px; //宽度自己掌握
  height: 100%;
}
</style>
