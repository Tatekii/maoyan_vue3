<template>
  <Navbar></Navbar>
  <div class="body">
    <OpenApp></OpenApp>
    <TopBar></TopBar>
    我是首页
    <div class="test">123</div>
    <div class="test">123</div>
    <div class="test">123</div>
    <div class="test">123</div>
  </div>
  <Footer></Footer>
</template>

<script lang='ts' setup>
  import Footer from '@/components/Footer/index.vue'
  import TopBar from '@/components/TopBar/index.vue'
  import OpenApp from '@/components/OpenApp/index.vue'
  import Navbar from '@/components/NavBar/index.vue'

</script>

<style lang="scss" scoped>
.body{
  background:gray;
}
.test{
  height: 400px;
  color: red;
}
</style>
