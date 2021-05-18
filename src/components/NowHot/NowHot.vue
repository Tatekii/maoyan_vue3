<template>
  <div class="page-wrap n-hot active">
    <div class="swiper-header movie-ad"></div>
    <div class="tab-block">
      <div class="tab-content">
        <div class="page n-hot">
          <TopRated></TopRated>
          <div class="list-wrap" style="margin-top: 0px">
            <MovieBlock v-for="item in movieList.movieList" :key="item.id" :data="item"></MovieBlock>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import TopRated from '@/components/TopRated/TopRated.vue'
import MovieBlock from '@/components/MovieBlock/MovieBlock.vue'
import movieListRequest from '@/api/movieList'
import { ref } from 'vue'
export default {
  components: {
    TopRated,
    MovieBlock
  },
  setup () {
    let movieList = ref([])
    const getMovies = function () {
      movieListRequest().then(res=>{
        movieList.value = res
      })
    }
    getMovies()
    return{
      movieList
    }
  }
}
</script>

<style lang="scss" scoped>
.n-hot {
  height: 500px;
}
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
</style>
