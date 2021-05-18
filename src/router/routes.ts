import {RouteRecordRaw} from 'vue-router'
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
        component: () => import('@/components/NowHot/NowHot.vue')
      },
      {
        path: 'cinema',
        name: 'Cinema',
        meta: {
          title: '影院',
          keepAlive: true
        },
        component: () => import('@/components/Cinema/Cinema.vue')
      },
      {
        path: 'coming',
        name: 'Coming',
        meta: {
          title: '待映',
          keepAlive: true
        },
        component: () => import('@/components/Coming/Comming.vue')
      },
      {
        path: 'classic',
        name: 'Classic',
        meta: {
          title: '经典电影',
          keepAlive: true
        },
        component: () => import('@/components/CLassic/index.vue')
      }
    ]
  },
  {
    path: '/city-list',
    name: 'CityList',
    meta: {
      title: '选择城市',
      keepAlive: true
    },
    component: () => import('@/components/CityList/CityLIst.vue')
  },
  {
    path:'/search',
    name:'Search',
    meta:{
      title:'搜索',
      keepAlive:true
    },
    component: () => import('@/views/Search/index.vue')
  }
]

export default routes