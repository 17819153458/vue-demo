<template>
  <div>
    <!-- 使用你的自定义组件标签 -->
    <my-custom-button>点击我</my-custom-button>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import { ElButton } from 'element-plus'

export default defineComponent({
  components: {
    // 将 ElButton 注册为局部组件，并命名为 MyCustomButton
    MyCustomButton: ElButton,
  },
})
</script>
