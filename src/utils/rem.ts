import {debounce}  from 'lodash-es'
const baseSize = 37.5

function setRem(): void {
  const scale: number = document.documentElement.clientWidth / 375
  document.documentElement.style.fontSize = baseSize * Math.min(scale, 2) + 'px'
}

setRem()

window.onresize = function(){
  debounce(setRem,150)
}