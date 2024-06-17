<template>
  <div><MyButton @click="click">123412341234</MyButton></div>
  <div><MyButtonHHH @click="clickHHH">HHHH</MyButtonHHH></div>
</template>

<script setup lang="ts">
import * as elementComp from 'element-plus'
import { onMounted, ref } from 'vue'

import { ElButton as MyButton } from 'element-plus'
import { MyButtonHHH } from './component'

const ElArray = ref<string[]>([])
const getAllElComp = () => {
  for (const key in elementComp) {
    if (key.startsWith('El')) {
      console.log('key', key)
      ElArray.value.push(key)
    }
  }
  console.log('ElArray', ElArray.value)
  console.log('length', ElArray.value.length)
}
// setup 语法糖，组合式api 有生命周期钩子
onMounted(() => {
  getAllElComp()
})

const click = () => {
  console.log('click myButton')
}
const clickHHH = () => {
  console.log('click myButtonHHH')
}
</script>

<style scoped lang="less"></style>
