import request from '@/utils/request'

const topRatedListRequest = request({
  url: "/topRatedMovie",
  method: "get"
})

export default topRatedListRequest