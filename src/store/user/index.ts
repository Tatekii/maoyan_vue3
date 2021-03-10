interface USER_DATA {
  user? : string,
  isAdmin? : Boolean,
  avatar? : string
}

const state:USER_DATA =  {
  user: "" || String(window.localStorage.getItem('user')),
  isAdmin: false || Boolean(window.localStorage.getItem('isAdmin')),
  avatar:''
}

const mutation = {
  CUR_USER(state:USER_DATA,payload:USER_DATA){
    state.user = payload.user,
    state.isAdmin = payload.isAdmin
    state.avatar = payload.avatar
  }
}

export default{
  namespace:true,
  state,
  mutation
}