import { createStore } from 'vuex'
import city from './city'
import user from './user'

export default createStore({
  modules:{
    city,
    user
  }
})