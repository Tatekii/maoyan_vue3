<template>
  <div class="city_body">
    <div class="city_list">
      <div class="gps">
        <h2>定位城市</h2>
        <div class="gps-status">
          <text>定位失败，请点击重试</text>
        </div>
      </div>
      <div>
        <div>
          <div class="city_hot">
            <h2>热门城市</h2>
            <ul>
              <li
                v-for="item of hotCity"
                :key="item.id"
                @touchstart="handleCity(item.nm, item.id)"
              >{{ item.nm }}</li>
            </ul>
          </div>
          <div class="city_sort" ref="city_sort">
            <div v-for="item of cityList" :key="item.index">
              <h2 class="alpha_index sticky">{{ item.index }}</h2>
              <ul>
                <li
                  v-for="li of item.list"
                  :key="li.id"
                  @touchstart="handleCity(li.nm, li.id)"
                >{{ li.nm }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="city_index">
      <ul>
        <li
          v-for="(item,index) in cityList"
          :key="item.index"
          @touchstart="handleIndex(index)"
        >{{ item.index }}</li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts" setup>
import './index.scss'
import { nextTick, onMounted, ref } from 'vue';
import request from '@/util/request'

let cityList = ref()
let hotCity = ref()

let c = window.localStorage.getItem('cityList')
let h = window.localStorage.getItem('hotCity')
if (c && h) {
  c = JSON.parse(c)
  h = JSON.parse(h)
  cityList.value = c
  hotCity.value = h
} else {
  request({
    url: '/cityList',
    method: 'get'
  }).then(res => {
    let cts = res.cts
    formatCities(cts)
    window.localStorage.setItem('cityList', JSON.stringify(cityList.value))
    window.localStorage.setItem('hotCity', JSON.stringify(hotCity.value))
  })
}

// onMounted(()=>{
//   nextTick(()=>{
//     window.addEventListener('scroll',()=>{
//       console.log(window.scrollY)
//     })
//   })
// })
function formatCities(data: Array<any>): void {
  let hl: any[] = []
  let cl: any[] = []
  for (let i in data) {
    let letter = data[i].py.substring(0, 1).toUpperCase()
    if (data[i].id < 46) {
      hl.push(data[i])
    }
    //首先查找list中有无这个index
    // 空数组做循环内代码不会执行
    // 先判断（以此循环）再添加（一次或不循环）
    if (indexCheck(letter)) {
      cl.push({ index: letter, list: [data[i]] })
    } else {
      for (let j in cl) {
        if (cl[j].index === letter) {
          cl[j].list.push(data[i])
        }
      }
    }
  }
  function indexCheck(letter: string): Boolean {
    for (let i in cl) {
      if (cl[i].index === letter) {
        return false
      }
    }
    return true
  }
  //按照字母排序
  cl.sort((a, b) => {
    if (a.index > b.index) {
      return 1
    } else if (a.index < b.index) {
      return -1
    } else {
      return 0
    }
  })
  cityList.value = cl
  hotCity.value = hl
}

// 跳转字母索引
let alphaDom: any = document.getElementsByClassName('alpha_index')
function handleIndex(index: number | string): void {
  for (let i = 0; i < 22; i++) {
    alphaDom[i].classList.remove('sticky')
  }
  //index就是字母表的索引
  //不使用字母查找，排序过的使用脚标更方便
  const top = alphaDom[index].offsetTop
  console.log(`字母索引${index}高度${top}`)
  nextTick(() => {
    document.querySelector('.city_list').scrollTop = top + 300
    for (let i = 0; i < 22; i++) {
      alphaDom[i].classList.add('sticky')
    }
  })




  // better-scroll的scroll方法
  // y轴上往上滚动为负
  // city_list.scrollToAlpha(-alphaDom[index].offsetTop - 210)
}

function handleCity(nm: string, id: number): void {
  console.log(`selent ${nm} - id:${id}`)
  // this.$store.commit('city/CITY_INDEX', { nm, id })
  // window.localStorage.setItem('currentCity', nm)
  // window.localStorage.setItem('currentCityId', id)
  // this.$router.push('/movie/onScreen')
}
</script>

<style>
</style>
