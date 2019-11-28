<style lang="scss" scoped type="text/scss">
  .shoppingTrolley {
    padding-bottom: 100px;
    .shoppingTrolley-all {
      width: 92%;
      li {
        padding-top: 20px;
        width: 100%;
        .shoppingTrolley-item {
          width: 100%;
          border-radius: 10px;
          padding: 20px 0;
          background-color: white;
          -webkit-box-shadow: 2px 2px 10px #eee;
          -moz-box-shadow: 2px 2px 10px #eee;
          box-shadow: 2px 2px 10px #eee;
          img {
            padding-left: 20px;
            width: 200px;
          }
          .shoppingTrolley-item-right {
            padding-left: 20px;
            .shoppingTrolley-item-price {
              color: $color-primary;
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="shoppingTrolley">
    <Header
      title="购物车"
    />
    <div class="flex-column-wrap-center-center">
      <ul class="flex-column-wrap-flex_start-center shoppingTrolley-all">
        <li v-for="item in shoppingTrolley_list">
          <div class="flex-row-wrap-flex_start-center shoppingTrolley-item">
            <img :src="item.img" alt="">
            <div class="shoppingTrolley-item-right flex-column-wrap-flex_start-flex_start">
              <div>{{item.pruduct}} {{item.description}}</div>
              <div class="shoppingTrolley-item-price">P {{item.price}}</div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import Header from './common/Header'
import chengzi from '../assets/img/home/chengzi.png'
export default {
  name: 'ShoppingTrolley',
  data() {
    return {
      shoppingTrolley_list: [
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: '100',
          sales: '200'
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: '100',
          sales: '200'
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: '100',
          sales: '200'
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: '100',
          sales: '200'
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: '100',
          sales: '200'
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: '100',
          sales: '200'
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: '100',
          sales: '200'
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: '100',
          sales: '200'
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: '100',
          sales: '200'
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: '100',
          sales: '200'
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: '100',
          sales: '200'
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: '100',
          sales: '200'
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: '100',
          sales: '200'
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: '100',
          sales: '200'
        }
      ]
    }
  },
  components: {
    Header
  }
}
</script>
