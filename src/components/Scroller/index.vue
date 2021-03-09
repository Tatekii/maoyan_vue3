<template>
  <div class="wrapper">
    <slot></slot>
  </div>
</template>

<script setup="props" lang="ts">
import BetterScroll from 'better-scroll'
import { nextTick, onMounted } from 'vue'
let bs: any
onMounted(() => {
  nextTick(() => {
    let wrapper = document.querySelector('.wrapper')
    bs = new BetterScroll(wrapper, {
      movable: true,
      zoom: true
    })
  })
})
// Onmounted () {
//   this.scroll = new bScroll(this.$refs.sWrapper, {
//     tap: true,
//     probeType: 1
//   })
//   this.scroll.on('scroll',(pos)=>{
//     this.handlePullDown(pos)
//   })
//   this.scroll.on('touchEnd',(pos)=>{
//     this.handlePullEnd(pos)
//   })
// },
function scrollToAlpha(y: number): void {
  bs.scrollTo(0, y)
}
</script>

<style lang="stylus" scoped>
.wrapper
  height: 100%
  overflow hidden
</style>
