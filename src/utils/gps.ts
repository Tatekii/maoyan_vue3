const myAk = 'AqvU4XUjP79kCLCT66hqZxb53YccY3Kr'
import locationRequest from '@/api/location'

interface coords{
  latitude:Number
  longitude:Number
}

const getLocation = function(){
  return new Promise((resolve,reject)=>{
        navigator.geolocation.getCurrentPosition(async s=>{
    const {latitude ,longitude}:coords = await s.coords
    const coords = `${latitude},${longitude}`
    const res:any = await locationRequest(myAk,coords)
    let ct = res.result.addressComponent.city
    ct = ct.substring(0,2)
    resolve(ct)
    // 深圳  删掉”市“字
  },r=>{
    reject(r)
  })
  })
}

export default getLocation