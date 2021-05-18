<template>
  <header class="navbar">
    <div class="nav-wrap-left">
      <a
        class="back"
        href="#"
        onclick="javascript: window.history.back();return false;"
        one-link-mark="yes"
        ><i class="icon-back"></i
      ></a>
    </div>
    <h1 class="nav-header">猫眼电影</h1>
    <div class="nav-wrap-right">
      <div class="nav-button">
        <img
          class="nav-icon"
          src="//p0.meituan.net/scarlett/f05f61e7a8f3f45fd071c068d7a26870356.png"
        />
      </div>
    </div>
  </header>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$height: 50.5px;
$theme: #e54847;
.navbar {
  height: $height;
  color: #fff;
  background: $theme;
  border-bottom: 1px solid $theme;
  display: -webkit-box;
  position: relative;
}
.nav-wrap-left {
  height: $height;
  line-height: $height;
  a.back {
    height: 50px;
    width: 22.5px;
    line-height: 50px;
    padding: 0 15px;
  }
  .icon-back {
    display: inline-block;
    width: 22.5px;
    height: 22.5px;
    vertical-align: middle;
    position: relative;
  }
  .icon-back:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    width: 16px;
    height: 16px;
    border-bottom: 2px solid #fff;
    border-left: 2px solid #fff;
    -webkit-transform: rotate(45deg);
    transform: rotate(45deg);
  }
}

.navbar .h1.nav-header,
.navbar h1.nav-header,
.navbar span.nav-header {
  display: block;
  -webkit-box-flex: 1;
  -ms-flex: 1;
  font-size: 18px;
  font-weight: 400;
  text-align: center;
  line-height: 50px;
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.navbar .nav-wrap-right {
  height: $height;
  line-height: $height;
  width: 52.5px;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
  img {
    width: 17px;
    height: 16px;
    margin-right: 12px;
  }
}
</style>
