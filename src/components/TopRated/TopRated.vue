<template>
  <div id="top-rated-wrap">
  </div>
</template>

<script>
import topRatedListRequest from '@/api/topRatedList'
import { onMounted } from "@vue/runtime-core"
import {ref} from 'vue'
import './index.scss'
export default{
  setup(){
    let html = ref('')
    const getTopRated = async function(){
      const res = await topRatedListRequest
      html.value = res
      document.getElementById('top-rated-wrap').innerHTML = html.value
    }

    onMounted(()=>{
      getTopRated()
    })
  }
}
</script>

<style>
</style>
