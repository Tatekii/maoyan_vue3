<template>
  <div class="item">
    <div class="main-block">
      <div class="avatar">
        <div class="default-img-bg">
          <img
            :src="formatImg(data.img)"
            onerror="this.style.visibility='hidden'"
          />
        </div>
      </div>
      <div class="mb-outline-b content-wrapper">
        <!-- 在这里区分预售和在售 -->
        <div class="column content">
          <div class="box-flex movie-title">
            <div class="title line-ellipsis">{{ data.nm }}</div>
          </div>

          <div class="detail column">
            <div class="score line-ellipsis">
              <span class="score-suffix">观众评 </span>
              <span class="grade">{{ data.sc }}</span>
            </div>

            <div class="actor line-ellipsis">{{ data.star }}</div>

            <div class="show-info line-ellipsis">{{ data.showInfo }}</div>
          </div>
        </div>

        <div class="button-block" data-id="1299372">
          <div v-if="data.globalReleased" class="btn normal">
            <span class="fix" data-bid="dp_wx_home_movie_btn">购票</span>
          </div>
          <div v-else class="btn pre" data-id="343034">
            <span class="fix" data-bid="dp_wx_home_movie_btn">预售</span>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['data'],
  setup () {
    const formatImg = src => {
      // 图片请求中带有宽高 https://p0.meituan.net/170.230/movie/3ad18f011110130e927d50046fde86f71038961.jpg
      // 原始src https://p0.meituan.net/  <<加入尺寸>>  w.h/movie/3ad18f011110130e927d50046fde86f71038961.jpg
      // iphone6 128.180
      const rule = /w.h/
      return src.replace(rule, '128.180')
    }
    return {
      formatImg
    }
  }
}
</script>


<style lang="scss" scoped>
.list-wrap {
  .item {
    padding-left: 15px;
    background-color: #fff;
    .main-block {
      position: relative;
      width: 100%;
      .avatar {
        &:before {
          content: "";
          display: block;
          position: absolute;
          width: 46px;
          height: 46px;
          background-repeat: no-repeat;
          background-size: contain;
        }
        width: 64px;
        height: 90px;
        position: relative;
        margin-top: 12px;
        float: left;
        img {
          background-color: transparent;
          height: 90px;
        }
      }
      .content-wrapper {
        padding: 12px 14px 12px 0;
        margin-left: 74px;
        height: 90px;
        max-height: 90px;
        position: relative;
        .content {
          padding-right: 5px;
          margin-right: 48px;
          overflow: hidden;
          .movie-title {
            max-height: 24px;
            margin-bottom: 7px;
            line-height: 24px;
            overflow: hidden;
            display: flex;
            .title {
              font-size: 17px;
              color: #333;
              font-weight: 700;
              padding-right: 5px;
              flex-shrink: 1;
            }
          }
          .detail {
            box-sizing: border-box;
            line-height: 1;
            overflow: hidden;
            font-size: 13px;
            color: #666;
            div {
              margin-top: 6px;
              line-height: 15px;
            }
            :nth-child(1) {
              margin-top: 0;
              line-height: auto;
            }
          }
        }
        .button-block {
          font-size: 12px;
          position: absolute;
          right: 14px;
          top: 0;
          bottom: 0;
          height: 27px;
          margin: auto;
          .btn.pre {
            background-color: #3c9fe6;
          }
          .btn {
            width: 47px;
            height: 27px;
            line-height: 28px;
            text-align: center;
            box-sizing: border-box;
            background-color: #f03d37;
            color: #fff;
            border-radius: 4px;
            white-space: nowrap;
            font-size: 12px;
            cursor: pointer;
          }
        }
      }
    }
  }
}
.list-wrap .item .detail .score .grade {
    font-weight: 700;
    color: #faaf00;
    font-size: 15px;
}
</style>
