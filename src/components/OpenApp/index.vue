<template>
  <div class="app-bar">
    <div class="logo">
      <img
        class="logo-img"
        alt="logo"
        src="//p0.meituan.net/scarlett/448afce485c1f342895185c2be668fa411803.png"
      />
    </div>
    <a class="benefit-text" href="javascript:void(0)">发现最新最热电影</a>
    <span class="split"></span>
    <a class="open-app" href="https://deeplink.maoyan.com/maoyan-app/app?channel=mymovie1yuan-dy">
      打开App
      <img
        class="point"
        src="//p0.meituan.net/scarlett/70a18c9d3c345f442e5a4e6bf2d16180779.png"
        alt="logo"
      />
    </a>
    <a
      id="download-tip"
      class="tip-open-app"
      href="https://deeplink.maoyan.com/maoyan-app/app?channel=mymovie1yuan-dy"
    >
      <img src="http://p1.meituan.net/scarlett/87654d5e4e5e057206969c3abb8e09f33151.png" />
      <div>打开App</div>
    </a>
  </div>
</template>

<script lang='ts' setup>
// import browser from '@/util/browser'
// const jumpApp = function() {
//   if (browser.versions.ios) {
//     console.log('ios系统');
//   } else if (browser.versions.android) {
//     //你的代码
//     console.log('android');
//   }
// }

</script>

<style lang="scss" scoped>
.app-bar {
  position: relative;
  height: 60px;
  background-color: #fff;
  width: 100%;
  z-index: 11;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  box-sizing: border-box;
  left: 0;
  top: 0;
  top: constant(safe-area-inset-top);
  top: env(safe-area-inset-top);
  border-bottom: 1px solid #e8e8e8;
}
.logo {
  .logo-img {
    position: absolute;
    left: 10px;
    top: 10px;
    width: 94px;
    height: 39px;
  }
}
.benefit-text {
  display: inline-block;
  position: absolute;
  height: 17px;
  line-height: 17px;
  right: 100px;
  font-size: 13px;
  font-family: PingFangSC-Regular, Arial, Helvetica, sans-seri;
  font-weight: 620;
  color: #666;
  text-decoration: none;
}

.split {
  display: inline-block;
  position: absolute;
  right: 89.5px;
  width: 0.5px;
  height: 13px;
  background: rgba(0, 0, 0, 0.1);
  @media (min-width: 375px) {
    right: 91.5px;
  }
}
.open-app {
  position: absolute;
  right: 12px;
  height: 20px;
  line-height: 20px;
  font-size: 15px;
  color: #b37e7e;
  font-family: PingFangSC-Medium;
  font-weight: 700;
  .point {
    width: 11px;
    height: 11px;
    padding-left: 1px;
    display: inline-block;
  }
}

.tip-open-app {
  position: fixed;
  right: 0;
  bottom: 120px;
  width: 110px;
  height: 38px;
  line-height: 38px;
  z-index: 10;
  opacity: 0.94;
  background-image: -webkit-linear-gradient(316deg, #fb3333, #ff5269 75%);
  background-image: linear-gradient(134deg, #fb3333, #ff5269 75%);
  box-shadow: 0 2px 4px 0 rgb(160 44 41 / 15%);
  border-radius: 20px 0 0 20px;
  display: -webkit-box;
  display: flex;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  img {
    width: 23px;
    height: 23px;
  }
  div {
    color: #fff;
    margin-left: 5px;
    font-size: 14px;
  }
}
</style>
