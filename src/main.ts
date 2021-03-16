import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import 'vant/lib/index.css'
import './util/rem'
import './assets/style/common.scss'
// import store from './store/simple_store'


const app = createApp(App)
app.use(router)
app.use(store)

app.mount('#app')
