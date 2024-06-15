<template>
  <div class="sidebar">
    <el-menu router active-text-color="#ffd04b" background-color="#545c64" text-color="#fff">
      <menu-recursion v-for="item in menusData" :key="item.id" :menuItem="item"></menu-recursion>
    </el-menu>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { menusData } from './menu'
import menuRecursion from './menuRecursion.vue'

onMounted(() => {
  console.log(menusData, 12341234)
})
</script>

<style scoped lang="less">
.sidebar {
  position: absolute;
  top: 66px;
  bottom: 0;
  overflow-y: auto;
  width: 240px;
  background-color: #0096aa;
  color: #e8e6e3;
  padding: 0 !important;
}
:deep .el-menu {
  background-color: #0096aa;
}
:deep .el-sub-menu__title:hover {
  background-color: #516272;
}

:deep .el-menu-item:hover {
  background-color: #879794;
}
</style>
