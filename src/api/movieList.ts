import request from '@/utils/request'

const movieListRequest = function () {
  return request({
    url: "/movieList",
    method: "get"
  })
}

export default movieListRequest