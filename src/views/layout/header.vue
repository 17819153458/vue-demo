<template>
  <div class="header">
    <div class="head-left">
      <span class="left-title-name">DEMO 工程</span>
      <span @click="settingStore.toggleCollapse">
        <el-icon v-if="settingState?.collapse">
          <component is="Expand"></component>
        </el-icon>
        <el-icon v-if="!settingState?.collapse">
          <component is="Fold"></component>
        </el-icon>
      </span>
    </div>
    <div class="head-right">登录选项</div>
  </div>
</template>

<script setup lang="ts">
import { useSettingStore } from '@/stores/settingStore'

const settingStore = useSettingStore()
const settingState = settingStore.state
</script>

<style scoped lang="less">
.header {
  background-color: #15967d;
  color: #e8e6e3;
  font-size: 22px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .head-left {
    padding-left: 20px;
    .left-title-name {
      display: inline-block;
      margin-right: 60px;
    }
  }
  .head-right {
    padding-right: 20px;
  }
}
</style>
