<template>
  <Navbar></Navbar>
  <div class="body">
    <OpenApp></OpenApp>
    <TopBar></TopBar>
    <div class="router-view-wrapper" @scroll="handleScroll" ref="scrollWrapper">
      <router-view></router-view>
    </div>
  </div>
  <Footer></Footer>
</template>

<script lang='ts'>
import Footer from "@/components/Footer/index.vue";
import TopBar from "@/components/TopBar/index.vue";
import Navbar from "@/components/NavBar/index.vue";
import OpenApp from "@/components/OpenApp/index.vue";
// import _ from 'lodash-es'
import {onMounted, ref,Ref} from 'vue'
export default {
  components: {
    OpenApp,
    Navbar,
    TopBar,
    Footer,
  },
  setup() {
    const scrollWrapper : Ref<HTMLElement | null> = ref(null)
    const handleScroll = function(){
      let scrollTop = scrollWrapper.value?.scrollTop
      console.log(scrollTop);
      
    }
    onMounted(()=>{
      // console.log(scrollWrapper.value);
      
    })
    return {
      handleScroll,
      scrollWrapper
    }
  },
};
</script>

<style lang="scss" scoped>
.router-view-wrapper {
    position: absolute;
    width: 100%;
    height: 570.5px;
    overflow: auto;
    background-color: #f5f5f5;
}
</style>
