import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router/index'

import ElementPlus from 'element-plus'
// import * as Icons from '@element-plus/icons'
import * as Icons from '@element-plus/icons-vue'

import 'element-plus/dist/index.css' // 引入 Element Plus 的样式

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ElementPlus)
Object.keys(Icons).forEach((key) => {
  app.component(key, Icons[key as keyof typeof Icons])
})

app.mount('#app')
