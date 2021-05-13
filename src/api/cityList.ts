import request from '@/utils/request'

const cityRequest = request({
  url: "/cityList",
  method: "get"
})

export default cityRequest