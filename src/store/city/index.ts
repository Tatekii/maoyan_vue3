interface CITY_DATA {
  nm: string
  id: string
}

const state:CITY_DATA = {
  nm: window.localStorage.getItem('currentCity') || '',
  id: window.localStorage.getItem('currentCityId') || '1'
}

const mutations = {
  CHANGE_CITY(state:CITY_DATA,payload:CITY_DATA){
    state.nm = payload.nm;
    window.localStorage.setItem('currentCity',payload.nm)
    window.localStorage.setItem('currentCityId',payload.id)
    state.id = payload.id;
  }
}

const getters = {
  GET_CITY(){
    return state.nm
  }
}

export default {
  namespaced: true,
  state,
  mutations,
  getters
};
