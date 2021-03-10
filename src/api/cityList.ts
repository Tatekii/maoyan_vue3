import request from '@/util/request'

const curRequest = request({
  url: "/cityList",
  method: "get",
})

export default curRequest