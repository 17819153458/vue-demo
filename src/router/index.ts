import { createRouter, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import { demoRouter } from '@/router/modules/demo'
import { demo2Router } from '@/router/modules/demo2'

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/layout1',
  },
  ...demoRouter,
  ...demo2Router,
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
})

export default router
