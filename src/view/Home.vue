<style lang="scss" scoped>
  .home-contain {
    background: white;
    padding-bottom: 20px;
    .home-search {
      width: 100%;
      text-align: center;
      padding: 2% 0;
      @extend .theme-gradient
    }
    .home-product-type-list {
      ul {
        padding-bottom: 20px;
        li {
          padding-top: 20px;
          width: 20%;
          font-size: 14px;
          text-align: center;
          color: #404040;
          img {
            width: 70%;
          }
        }
      }
    }
    .home-product-list {
      ul {
        li {
          padding-top: 20px;
          width: 44%;
          border: .0333rem solid #ecebeb;
          border-radius: 10px;
          margin-bottom: 20px;
          img {
            width: 80%;
          }
        }
      }
    }
  }
</style>
<template>
  <div class="home-contain">
    <div class="home-search">
      <mt-search v-model="result"></mt-search>
    </div>

    <mt-swipe :show-indicators="true" :auto="4000">
      <mt-swipe-item><img src="../assets/img/banner/banner.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/img/banner/banner.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/img/banner/banner.png" alt=""></mt-swipe-item>
      <mt-swipe-item><img src="../assets/img/banner/banner.png" alt=""></mt-swipe-item>
    </mt-swipe>
    <div class="home-product-type-list">
      <ul class="flex-row-wrap-space_around-center">
        <li v-for="item in product_type_list">
          <div class="flex-row-wrap-center-center"><img :src="item.img" alt=""></div>
          <div>{{item.name}}</div>
        </li>
      </ul>
    </div>
    <div class="home-product-list">
      <ul class="flex-row-wrap-space_around-center">
        <li v-for="item in product_list">
          <div class="flex-row-wrap-center-center"><img :src="item.img" alt=""></div>
          <div>[{{item.pruduct}}]</div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import home01 from '../assets/img/home/home01.png'
  import home02 from '../assets/img/home/home02.png'
  import home03 from '../assets/img/home/home03.png'
  import home04 from '../assets/img/home/home04.png'
  import home05 from '../assets/img/home/home05.png'
  import home06 from '../assets/img/home/home06.png'
  import home07 from '../assets/img/home/home07.png'
  import home08 from '../assets/img/home/home08.png'
  import home09 from '../assets/img/home/home09.png'
  import home10 from '../assets/img/home/home10.png'
  import chengzi from '../assets/img/home/chengzi.png'

  const product_type_list = [
    {
      name: '休闲食品',
      img: home01
    },
    {
      name: '饮料冲剂',
      img: home02
    },
    {
      name: '油粮副食',
      img: home03
    },
    {
      name: '香烟酒水',
      img: home04
    },
    {
      name: '个人护洁',
      img: home05
    },
    {
      name: '美容美妆',
      img: home06
    },
    {
      name: '医疗保健',
      img: home07
    },
    {
      name: '亿家生鲜',
      img: home08
    },
    {
      name: '活动通告',
      img: home09
    },
    {
      name: '帮助中心',
      img: home10
    },
  ]
  export default {
    name: 'Home',
    data() {
        return {
          result: '',
          product_type_list: product_type_list,
          product_list: [
            {
              img: chengzi,
              pruduct: '橙子',
              description: '马来西亚进口鲜甜橙子一份3个',
              price: '100',
              collection: false,
              sales: '200'
            },
            {
              img: chengzi,
              pruduct: '橙子',
              description: '马来西亚进口鲜甜橙子一份3个',
              price: '100',
              collection: false,
              sales: '200'
            },
            {
              img: chengzi,
              pruduct: '橙子',
              description: '马来西亚进口鲜甜橙子一份3个',
              price: '100',
              collection: false,
              sales: '200'
            },
            {
              img: chengzi,
              pruduct: '橙子',
              description: '马来西亚进口鲜甜橙子一份3个',
              price: '100',
              collection: false,
              sales: '200'
            }
          ]
        }
    },
    computed: {
      token () {
        return this.$store.state.token
      }
    }
  }
</script>
