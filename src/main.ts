import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import store from './store'
import 'vant/lib/index.css'
import './util/rem'
import './assets/style/common.scss'

createApp(App)
.use(router)
// .use(store)
.mount('#app')
