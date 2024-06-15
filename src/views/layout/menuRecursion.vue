<template>
  <el-menu-item v-if="!menuItem?.children?.length" :index="menuItem?.index">
    <el-icon v-if="menuItem?.icon">
      <component :is="menuItem?.icon"></component>
    </el-icon>
    {{ menuItem?.name }}
  </el-menu-item>
  <el-sub-menu v-if="menuItem?.children?.length" :index="menuItem?.index">
    <template #title>
      <el-icon v-if="menuItem?.icon">
        <component :is="menuItem?.icon"></component>
      </el-icon>
      <span>{{ menuItem?.name }}</span>
    </template>

    <menu-recursion v-for="item in menuItem.children" :key="item?.id" :menuItem="item"></menu-recursion>
  </el-sub-menu>
</template>

<script setup lang="ts">
import type { Menus } from '@/common/type/menu'

import { PropType } from 'vue'

const props = defineProps({
  menuItem: Object as PropType<Menus>,
})
</script>

<style scoped lang="less"></style>
