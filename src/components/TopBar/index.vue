<template>
  <section class="topbar">
    <div class="white-bg topbar-bg">
      <div class="city-entry">
        <router-link to="city-list">
          <span class="city-name">{{ curCity }}</span>
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
import { ref, onMounted } from "vue";
import gps from "@/util/gps";
import store from "@/store/simple_store";

const selected = ref("hot");
const curCity = ref(store.state.nm);

// 切换tab
const select: (v: string) => void = (v) => {
  selected.value = v;
  let node = document.getElementsByClassName(v);
  const allNode = document.getElementsByClassName("hot-item");
  for (let i = 0; i < 4; i++) {
    allNode[i].classList.remove("active");
  }
  node[0].classList.add("active");
};

const useGps: () => void = async () => {
  console.log('usegps');
  const ct:any = await gps();
  store.mutations.CUR_CITY({ nm: ct });
  curCity.value = ct;
};

export default {
  setup() {
    onMounted(() => {
      if (!store.state.nm) {
        useGps();
      }
    });
    return {
      selected,
      select,
      curCity,
    };
  },
};
</script>

<style lang="scss" scoped>
.topbar {
  border-bottom: 1px solid #e6e6e6;
  height: 45px;
}
.topbar-bg {
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  height: 44px;
  -webkit-box-pack: justify;
  justify-content: space-between;
}

.city-entry {
  padding-left: 15px;
  font-size: 15px;
  color: #666;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  a {
    color: #666;
  }
  .city-name {
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    max-width: 70px;
    max-width: 19.2vw;
  }
  .city-entry-arrow {
    width: 0;
    height: 0;
    border: 4px solid #b0b0b0;
    border-left-color: transparent;
    border-right-color: transparent;
    border-bottom-color: transparent;
    display: inline-block;
    margin-left: 4px;
    margin-top: 5px;
  }
}

.switch-hot {
  display: -webkit-box;
  display: flex;
  height: 44px;
  line-height: 44px;
  position: relative;
  justify-content: space-around;
  .hot-item {
    color: #666;
    width: 40px;
    width: 10.66667vw;
    text-align: center;
    margin: 0 5px;
    margin: 0 1.33333vw;
    h2 {
      display: inline;
      font-size: 15px;
      font-weight: 700;
    }
    &.active {
      color: #333;
      h2 {
        font-size: 17px;
      }
    }
    &.classic {
      width: 21.33333vw;
    }
    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: 1px;
      width: 20px;
      width: 5.33333vw;
      border-radius: 1px;
      height: 3px;
      background-color: #f03d37;
      -webkit-transition: left 0.2s;
      transition: left 0.2s;
      left: 4vw;
    }
  }

  &[data-active="hot"] .hot-item:after {
    left: 4vw;
  }
  &[data-active="cinema"] .hot-item:after {
    left: 17.33333vw;
  }
  &[data-active="coming"] .hot-item:after {
    left: 30.66667vw;
  }
  &[data-active="classic"] .hot-item:after {
    left: 49.33333vw;
  }
}

.search-icon {
  width: 20px;
  height: 20px;
  background: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACgAAAAoCAYAAACM/rhtAAAAAXNSR0IArs4c6QAABC1JREFUWAntWEtrU1EQPpO+ArYm1Y1I3VRXgu5EoSpVQaxCxUVxYTeCv8CtoFVxW0F/gBsLiguxoBaxWHyLS0EEdWWobrRprZC+cpzv3NyTOfeR3DS3duOF5M6ZMzPflzmvOVHq/9NcBqhRdz001D43UziktR5k35382ao1bUUcIj3NL3w+EtH4xu6eZ3Tv3iL6VvskJjh/vH/Lcql0UZM6o7TamAiQ1BxpNdaazV7pfDT1I5FPwKguQT0w0FFcLF5QSp9nYhsC/smapP5wfkfz7flr9PjxQjInz6omQZO1hdJ9rdW+RoLG2RKpt60d2VONZDOW4PyRA7uX9NJDBuuJACzwhHuQ0ZmHPNe+dm1qxbxTv38t83zU28tUPqG0Phnn25ah451P33yIiBtSRRJE5pZKpfchAKJp0vpSbvO2Wzz5V0LRhIIXU8vsz29nNdFlJmsWkegutGWze5JkMkQQc252cWYqYljH850twzT+6rcAqivqwb6u4vzKbTbEqrcPhjvX3t1fb05mrEdFwIIIkSN1I3/w2KlGySEkfOCrVOamxAKGt/ikNiw7GTRDu1D6Elit44bcyEg57J5co0dGMsXnE/fZo5pJXt1tHdkdtYbaySD2OYcczzkzrE2Sw88gjoFYvLjMgjI/jbctg2ka0V+WIE4IswkLOyyI1QyrCOGIiIWYUglMYEudlC1BHF+BE6KA1SqN05ArMQs2Fp9KBtsqXMESrJyt1V7e5+ptJVXj5JKJybGlRwhbdFqCrMPBbx9swraRshAR28GWcJKgs5nihJCGacoRsR1siWUJ+iWT3+kfX347zXcwdhBbYlmCUrkOso7DtAQrxaa1w8FvGykLwdiM/T0OwhJkg+oGyg1UJXFOzeojYjvYMr4k+FF2mJJJKlKUI2I72BLKEsQdQnagnkPJ5OhSaJiYXq1oo4WwbQ+XGL6MC47iO4Tf5ncP6jnRTkWsxKwWwYxpsGOiW4K4feGCI+1QbKKek7pmZMQyBawIAkxgC5UjWoLQ4vbFWeQLTuXhShjFJkolX7Xatym3ULjK6pqxDGaNoA6wV5fRaMB+sPhi4nozJL1a8IlbCxoQGq1VC8LEKVih+Icl/2cu+Xc1XPLDAVdD5loticCcK+Hin/Kn4uF955KsbtjAFj7wNRGcL+qdW5wFTs0nlEHfeg2vnT4EF9e0QoqGc5Ov71hlQIglCLs1uLh/5lnVyyeJ3V9Bkne7M/nJV3cD3EzTWSRBA0xgXA35p151VnfQsF4bOwPHwJwDGY+U5+SRLY8Vj/SdjgpTM4PSwWQzpT+PPDLlsSSZTEzQJ8uTP5W/35KSbJigTzSNdxxJamnpyz15+Q4YNedgGiRqxfAWRnhO6pWy3ZbWlSDIR5EkpV/4P2xdh9gngffs0f17kTmQy02+mZB9/+VmMvAXE7/38O8tTYkAAAAASUVORK5CYII=)
    no-repeat;
  background-size: 20px;
  padding: 10px 15px 10px 10px;
  background-position: 10px;
}
</style>
