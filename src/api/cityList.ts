import request from '@/util/request'

const cityRequest = request({
  url: "/cityList",
  method: "get"
})

export default cityRequest