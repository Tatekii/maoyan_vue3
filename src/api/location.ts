import request from '@/util/request'
// const baiduApi = `location?ak=${myAk}ak&output=json&coordtype=wgs84ll&location=`
// baseURL: 'http://api.map.baidu.com/reverse_geocoding/v3/',
const locationRequest = (ak:string, coords:string) => {
  return request({
    url: "/location",
    method: "get",
    params: {
      ak: ak,
      output: 'json',
      coordtype: 'wgs84ll',
      location: coords
    }
  })
}


export default locationRequest