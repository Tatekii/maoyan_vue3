interface CITY_DATA {
  nm: string
  id: string
}
import gps from '@/utils/gps'

const state:CITY_DATA = {
  nm: window.localStorage.getItem('currentCity') ||'',
  id: window.localStorage.getItem('currentCityId') || '1'
}

const mutations = {
  CHANGE_CITY(state:CITY_DATA,payload:CITY_DATA){    
    state.nm = payload.nm;
    payload.nm && window.localStorage.setItem('currentCity',payload.nm)
    payload.id && window.localStorage.setItem('currentCityId',payload.id)
    state.id = payload.id;
  }
}

const actions = {
  async GET_GPS ({commit}){
    const gpsRes = await gps()
    commit('CHANGE_CITY',{'nm':gpsRes})
  }
}

const getters = {
  GET_CITY(){
    return state.nm
  }
}


// console.log(gpsRes);
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};
