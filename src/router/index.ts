import { createRouter, createWebHashHistory} from 'vue-router'
import routes from './routes'
import 'nprogress/nprogress.css'
import NProgress from 'nprogress'
import storage from '@/util/storage'

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(async(to,from,next)=>{
  NProgress.start()
  if(to.matched.some(r=>r.meta.auth)){
    //路由表中有权限页面
    const token = storage.get('ACCESS_TOKEN')
    if(token && token !== 'undefined'){
      console.log('本地有token');
      
      // 如果本地存有token
    //   if(to.path === '/user/login'){
    //     next({path:'/'})
    //   }
    // }else if(){

    }else{
      next()
    }
  }else{
    next()
  }
})
router.afterEach(()=>{
  NProgress.done(true)
})

export default router