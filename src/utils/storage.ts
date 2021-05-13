// localStorage

const storage = {
  get : (key:string) => window.localStorage.getItem(key)
}


export default storage