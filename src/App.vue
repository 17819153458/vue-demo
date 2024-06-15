<template>
  <div class="container">
    <div class="header">
      <demoHeader />
    </div>
    <div class="left-and-contain">
      <div
        class="left-sidebar"
        :class="{ 'menu-collapse': settingState.collapse, 'un-collapse': !settingState.collapse }"
      >
        <sidebar />
      </div>
      <div class="demo-container">
        <RouterView />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import demoHeader from '@/views/layout/header.vue'
import sidebar from '@/views/layout/sidebar.vue'
import { useSettingStore } from './stores/settingStore'
import { watch, watchEffect } from 'vue'

const settingStore = useSettingStore()
const settingState = settingStore.state
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  .header {
    height: 66px;
  }
  .left-and-contain {
    display: flex;
    height: calc(100vh - 66px);
    .left-sidebar {
      height: 100%;
      background-color: #0096aa;
    }

    .demo-container {
      flex: 1;
    }
  }
}
.un-collapse {
  width: 240px;
  transition: width 0.3s ease-in-out;
}
.menu-collapse {
  width: 60px;
  transition: width 0.3s ease-in-out;
}
</style>
