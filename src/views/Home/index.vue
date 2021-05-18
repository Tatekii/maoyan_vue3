<template>
  <Navbar></Navbar>
  <div class="body">
    <OpenApp :showTip="showOpenApp"></OpenApp>
    <TopBar></TopBar>
    <div class="router-view-wrapper" @scroll="handleScroll" ref="scrollWrapper">
      <router-view></router-view>
    </div>
  </div>
  <Footer></Footer>
</template>

<script lang='ts'>
import Footer from "@/components/Footer/Footer.vue";
import TopBar from "@/components/TopBar/TopBar.vue";
import Navbar from "@/components/NavBar/NavBar.vue";
import OpenApp from "@/components/OpenApp/OpenApp.vue";
import {onMounted, ref,Ref} from 'vue'
import {throttle} from 'lodash-es/'
import { useStore } from 'vuex'

export default {
  components: {
    OpenApp,
    Navbar,
    TopBar,
    Footer,
  },
  setup() {
    const store = useStore()
    onMounted(() => {
      store.dispatch('city/GET_GPS')
    })
    // "打开app图标"提示
    let showOpenApp = ref(false)
    const scrollWrapper : Ref<HTMLElement | null> = ref(null)
    const handleScroll:()=>void = throttle(()=>{
      let scrollTop : number = scrollWrapper.value?.scrollTop || 0
      showOpenApp.value = scrollTop > 100 ? true :false
    },350)

    return {
      handleScroll,
      scrollWrapper,
      showOpenApp
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
