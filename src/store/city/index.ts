interface CITY_DATA {
  nm: string
  id: number
}

const state:CITY_DATA = {
  nm: String(window.localStorage.getItem('currentCity')) || "北京",
  id: Number(window.localStorage.getItem('currentCityId')) || 1
}

const mutations = {
  CUR_CITY(state:CITY_DATA,payload:CITY_DATA){
    state.nm = payload.nm;
    state.id = payload.id;
  }
}

export default {
  namespaced: true,
  state,
  mutations
};
