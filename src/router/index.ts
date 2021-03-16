import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    redirect: '/movie'
  },
  {
    path: '/movie',
    name: 'Home',
    meta: {
      title: '首页',
      keepAlive: true
    },
    component: () => import('@/views/Home/index.vue'),
    children: [
      {
        path: '',
        name: 'NowHot',
        meta: {
          title: '热映',
          keepAlive: true
        },
        component: () => import('@/components/NowHot/index.vue')
      },
      {
        path: 'cinema',
        name: 'Cinema',
        meta: {
          title: '影院',
          keepAlive: true
        },
        component: () => import('@/components/Cinema/index.vue')
      },
      {
        path: 'coming',
        name: 'Coming',
        meta: {
          title: '待映',
          keepAlive: true
        },
        component: () => import('@/components/Coming/index.vue')
      },
      {
        path: 'classic',
        name: 'Classic',
        meta: {
          title: '经典电影',
          keepAlive: true
        },
        component: () => import('@/components/Classic/index.vue')
      }
    ]
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