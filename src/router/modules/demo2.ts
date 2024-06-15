import type { RouteRecordRaw } from 'vue-router'

export const demo2Router: RouteRecordRaw[] = [
  {
    path: '/layout4',
    name: 'layout4',
    component: () => import(/* webpackChunkName: "demo" */ '@/views/demo2/layout4.vue'),
  },
  {
    path: '/layout5',
    name: 'layout5',
    component: () => import(/* webpackChunkName: "demo" */ '@/views/demo2/layout5.vue'),
  },
  {
    path: '/layout6',
    name: 'layout6',
    component: () => import(/* webpackChunkName: "demo" */ '@/views/demo2/layout6.vue'),
  },
]
