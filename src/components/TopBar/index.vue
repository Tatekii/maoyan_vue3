<template>
  <section class="topbar">
    <div class="white-bg topbar-bg">
      <div class="city-entry">
        <router-link to="city-list">
          <span class="city-name">{{ curCity ? curCity : "北京" }}</span>
          <i class="city-entry-arrow"></i>
        </router-link>
      </div>
      <div class="switch-hot" :data-active="selected">
        <a
          class="hot-item hot active"
          href="javascript:void(0)"
          data-tab="hot"
          @touchstart="select('hot')"
        >
          <h2>热映</h2>
        </a>
        <a
          class="hot-item cinema"
          href="javascript:void(0)"
          data-tab="cinema"
          @touchstart="select('cinema')"
        >
          <h2>影院</h2>
        </a>
        <a
          class="hot-item coming"
          href="javascript:void(0)"
          data-tab="coming"
          @touchstart="select('coming')"
        >
          <h2>待映</h2>
        </a>
        <a
          class="hot-item classic"
          href="javascript:void(0)"
          data-tab="classic"
          @touchstart="select('classic')"
        >
          <h2>经典电影</h2>
        </a>
      </div>
      <div class="search-entry search-icon" data-type="movie"></div>
    </div>
  </section>
</template>

<script lang='ts'>
import { useRouter } from "vue-router";
import "./index.scss";
import { ref, computed } from "vue";
import { useStore } from "vuex";
// import gps from "@/util/gps";

// const useGps: () => void = async () => {
//   console.log("usegps");
//   const ct: any = await gps();
//   store.mutations.CUR_CITY({ nm: ct });
//   curCity.value = ct;
// };

export default {
  setup() {
    const getters = useStore().getters;
    const curCity = computed(() => getters["city/GET_CITY"]);
    const router = useRouter();
    const selected = ref("hot");
    // 切换tab
    const select: (v: string) => void = (v) => {
      selected.value = v;
      let node = document.getElementsByClassName(v);
      const allNode = document.getElementsByClassName("hot-item");
      for (let i = 0; i < 4; i++) {
        allNode[i].classList.remove("active");
      }
      node[0].classList.add("active");
      router.push(`/movie/${v==='hot'?'':v}`)
    };
    return {
      selected,
      select,
      curCity,
      // router,
    };
  },
};
</script>

<style></style>
