<template>
  <div class="bottom-tab-bar">
    <a
      href="/#movie"
      class="tab-icon-wrap current"
      data-tab=".movie"
      one-link-mark="yes"
    >
      <span class="tab-icon" id="icon-movie"
        ><svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>电影1</title>
          <g fill="#696969" fill-rule="evenodd">
            <path
              d="M24.994 47c-.71 0-1.422-.034-2.136-.102C12.445 45.913 4.14 37.645 3.11 27.24c-.657-6.63 1.65-13.115 6.332-17.796 4.68-4.68 11.162-6.992 17.796-6.333 10.36 1.027 18.624 9.29 19.65 19.65.592 5.984-1.192 11.796-5.022 16.365-.162.193-.158.463.007.63l3.425 3.424c.586.584.586 1.534 0 2.12-.586.586-1.535.586-2.12 0l-3.426-3.425c-1.274-1.273-1.353-3.284-.185-4.677 3.307-3.946 4.847-8.97 4.335-14.142-.886-8.942-8.018-16.074-16.96-16.96-5.732-.562-11.336 1.426-15.38 5.47-4.042 4.042-6.034 9.647-5.467 15.378.89 8.98 8.058 16.117 17.045 16.968 3.867.37 7.68-.417 11.03-2.267.725-.4 1.637-.138 2.037.588.4.725.137 1.638-.588 2.038-3.26 1.8-6.896 2.73-10.626 2.73"
            ></path>
            <path
              d="M28 16c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3M28 34c0 1.657-1.343 3-3 3s-3-1.343-3-3 1.343-3 3-3 3 1.343 3 3M34 28c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3M16 28c-1.657 0-3-1.343-3-3s1.343-3 3-3 3 1.343 3 3-1.343 3-3 3"
            ></path>
          </g></svg
      ></span>
      <span class="tab-text">电影/影院</span>
    </a>
    <a
      href="/myCenter"
      class="tab-icon-wrap"
      data-tab=".my"
      one-link-mark="yes"
    >
      <span class="tab-icon" id="icon-mine"
        ><svg
          width="50"
          height="50"
          viewBox="0 0 50 50"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>我的1</title>
          <g fill="#696969" fill-rule="evenodd">
            <path
              d="M19.916 35.913c-.014-.016-.02-.036-.033-.05-.314-.32-.737-.455-1.153-.432C13.586 33.066 10 27.9 10 21.908 10 13.687 16.728 7 25 7c8.27 0 15 6.687 15 14.907 0 8.22-6.73 14.906-15 14.906-1.787 0-3.493-.328-5.084-.9zm14.502 1.225C39.558 33.98 43 28.343 43 21.908 43 12.032 34.925 4 25 4S7 12.033 7 21.907c0 6.657 3.68 12.466 9.113 15.552l-6.086 5.97c-.59.58-.6 1.53-.02 2.12.294.3.682.45 1.07.45.38 0 .76-.143 1.052-.43l6.916-6.785c1.867.654 3.865 1.028 5.954 1.028 2.324 0 4.54-.455 6.58-1.256l7.15 7.014c.292.287.672.43 1.05.43.39 0 .78-.15 1.072-.45.58-.59.57-1.54-.02-2.12l-6.414-6.292z"
            ></path>
            <path
              d="M30.358 25.068c-.77-.31-1.642.064-1.95.832-.554 1.375-1.89 2.263-3.408 2.263-1.503 0-2.835-.877-3.395-2.234-.316-.766-1.19-1.13-1.96-.815-.765.316-1.13 1.193-.813 1.96 1.024 2.483 3.446 4.088 6.168 4.088 2.75 0 5.178-1.627 6.19-4.144.31-.77-.063-1.643-.832-1.952"
            ></path>
          </g></svg
      ></span>
      <span class="tab-text">我的</span>
    </a>
  </div>
</template>


<style lang="scss" scoped>
.bottom-tab-bar svg, .bottom-tab-bar svg>g path, .bottom-tab-bar svg>path {
    fill: #696969;
}
.bottom-tab-bar .current svg, .bottom-tab-bar .current svg>g path, .bottom-tab-bar .current svg>path {
    fill: #f03d37;
}
.bottom-tab-bar {
  position: fixed;
  bottom: 0;
  width: 100%;
  background: #fff;
  border-top: 0.5px solid #d8d8d8;
  display: -webkit-box;
  display: flex;
  justify-content: space-around;
  padding-bottom: constant(safe-area-inset-bottom);
  padding-bottom: env(safe-area-inset-bottom);
  .tab-icon-wrap {
    float: left;
    width: 25px;
    height: 48px;
    line-height: 48px;
    box-sizing: border-box;
    color: #f03d37;
    position: relative;
    text-align: center;
    -webkit-box-flex: 1;
    flex: 1;
    .tab-icon {
      display: block;
      width: 25px;
      height: 25px;
      margin: auto;
      background-repeat: no-repeat;
      background-size: 25px;
      svg {
        height: 25px;
        width: 25px;
      }
    }
    .tab-text {
      line-height: 12px;
      position: absolute;
      top: 33px;
      left: 0;
      right: 0;
      font-size: 10px;
      color: #696969;
    }
  }
}
.bottom-tab-bar .current .tab-text {
    color: #f03d37;
}
</style>
