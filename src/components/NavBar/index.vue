<template>
  <div class="nav">
    <div class="nav-wrap-left">
      <a class="back">
        <i class="icon-back"></i>
      </a>
    </div>
    <div class="nav-tittle">猫眼电影</div>
    <div class="nav-wrap-right" @click="show">
      <div class="nav-button">
        <img
          class="nav-icon"
          src="//p0.meituan.net/scarlett/f05f61e7a8f3f45fd071c068d7a26870356.png"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
$height : 50.5px;
$theme : #e54847;
.nav{
  color: #fff;
  background: $theme;
  border-bottom: 1px solid $theme;
  display: -webkit-box;
}
.nav,.nav-wrap-left,.nav-wrap-right{
  height: $height;
  line-height: $height;
}
.nav-wrap-left{
  .back{
    display: none;
    height: 50px;
    width: 22.5px;
    line-height: 50px;
    padding: 0 15px;
    // .icon-back{
          //   display: inline-block;
    //   width: 22.5px;
    //   height: 22.5px;
    //   vertical-align: middle;
      // position: relative;
    // }
  }
}
.nav-tittle{
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
  margin-left: 52.5px!important;
}
.nav-wrap-right{
  width: 52.5px;
  display: -webkit-box;
  display: flex;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: end;
  justify-content: flex-end;
}
  .nav-button{
    img{
      width: 17px;
      height: 16px;
      margin-right: 12px;
    }
  }
</style>
