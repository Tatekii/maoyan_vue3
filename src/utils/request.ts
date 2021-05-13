import axios from 'axios'

const reqService = axios.create({
  timeout: 5000
})

reqService.interceptors.request.use(
  config => {
    // if(window.localStorage.get('ACCESS_TOKEN'))
    // config.headers.Authorization = `bearer ${window.localStorage.get('ACCESS_TOKEN')}`;
    return config
  },
  error => Promise.reject(error)
)

reqService.interceptors.response.use(
  response => {
    const res = response.data
    if (response.status !== 200) {
      return Promise.reject(new Error(res.message || 'resError'))
    } else {
      return res
    }
  },
  error => Promise.reject(error)
)

export default reqService