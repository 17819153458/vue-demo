<template>
  <div class="container">
    <demoHeader />
    <sidebar />
    <div class="demo-container">
      <RouterView />
    </div>
  </div>
</template>

<script setup lang="ts">
import demoHeader from '@/views/layout/header.vue'
import sidebar from '@/views/layout/sidebar.vue'
</script>

<style scoped lang="less">
.container {
  width: 100%;
  height: 100%;
  .demo-container {
    position: absolute;
    top: 66px;
    left: 240px;
    bottom: 0;
    right: 0;
  }
}
</style>
