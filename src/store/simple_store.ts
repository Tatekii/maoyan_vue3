import { App } from 'vue';
// 仅仅使用简单的store模式
interface store {
  readonly state: USER_DATA | CITY_DATA,
  mutations: any,
  actions?: any
}

interface USER_DATA {
  user?: string,
  isAdmin?: Boolean,
  avatar?: string
}

interface CITY_DATA {
  nm: string
  id: number
}

const simple_store: store = {
  state: {
    user: "" || String(window.localStorage.getItem('user')),
    isAdmin: false || Boolean(window.localStorage.getItem('isAdmin')),
    avatar: '',
    nm: String(window.localStorage.getItem('currentCity')) || "北京",
    id: Number(window.localStorage.getItem('currentCityId')) || 1
  },
  mutations: {
    CUR_CITY(payload: CITY_DATA, s = simple_store.state as CITY_DATA,) {
      s.nm = payload.nm;
      s.id = payload.id;
    },
    CUR_USER(payload: USER_DATA, s = simple_store.state as USER_DATA) {
      s.user = payload.user,
        s.isAdmin = payload.isAdmin
      s.avatar = payload.avatar
    }
  }
}

// export default{
//   install: (app:App, options?:object):void => {
//     // Plugin code goes here
//     app.config.globalProperties.$store = simple_store
//   }
// } 

export default simple_store