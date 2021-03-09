import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: true
    },
    component: () => import('@/views/Home/index.vue')
  },
  {
    path: '/city-list',
    name: 'CityList',
    meta: {
      title: '城市',
      keepAlive: true
    },
    component: () => import('@/components/CityList/index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router