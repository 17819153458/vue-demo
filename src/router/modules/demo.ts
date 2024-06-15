import type { RouteRecordRaw } from 'vue-router'

export const demoRouter: RouteRecordRaw[] = [
  {
    path: '/layout1',
    name: 'layout1',
    component: () => import(/* webpackChunkName: "demo" */ '@/views/demo/layout1.vue'),
  },
  {
    path: '/layout2',
    name: 'layout2',
    component: () => import(/* webpackChunkName: "demo" */ '@/views/demo/layout2.vue'),
  },
  {
    path: '/layout3',
    name: 'layout3',
    component: () => import(/* webpackChunkName: "demo" */ '@/views/demo/layout3.vue'),
  },
]
