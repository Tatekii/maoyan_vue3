<template>
  <Navbar></Navbar>
  <div class="body">
    <OpenApp></OpenApp>
    <TopBar></TopBar>
    <router-view></router-view>
  </div>
  <Footer></Footer>
</template>

<script lang='ts'>
import Footer from "@/components/Footer/index.vue";
import TopBar from "@/components/TopBar/index.vue";
import Navbar from "@/components/NavBar/index.vue";
import OpenApp from "@/components/OpenApp/index.vue";
export default {
  setup() {
    return {
      OpenApp,
      Navbar,
      TopBar,
      Footer,
    };
  },
};
</script>

<style lang="scss" scoped>
.router-view {
  background: greenyellow;
  position: relative;
  top: 0;
  left: 0;
  height: 1500px;
}
</style>
