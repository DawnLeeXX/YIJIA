<style lang="scss" scoped type="text/scss">
  .shoppingTrolley {
    padding-top: 80px;
    padding-bottom: 220px;
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
              padding: 10px 0;
              color: $color-primary;
            }
            .operation {
              width: 100%;
            }
            .shoppingTrolley-delete-img {
              width: 30px;
              height: 30px;
              padding-right: 10px;
            }
          }
        }
      }
    }
    .shoppingTrolley-settlement {
      position: fixed;
      bottom: 100px;
      left: 0;
      width: 100%;
      background: white;
      height: 100px;
      .shoppingTrolley-settlement-price {
        padding-left: 20px;
        .price-number {
          color: $color-primary;
        }
      }
      .shoppingTrolley-settlement-button {
        width: 300px;
        height: 100%;
        line-height: 100px;
        background: $color-minor;
        color: white;
        font-size: 36px;
        font-weight: 400;
        text-align: center;
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
              <div class="flex-row-wrap-space_between-center operation">
                <increase-number v-model="item.sales" />
                <img class="shoppingTrolley-delete-img" :src="delete_img" alt="">
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
    <div class="shoppingTrolley-settlement flex-row-wrap-space_between-center">
      <div class="shoppingTrolley-settlement-price"><span>合计:</span> <span class="price-number">P550(￥67.9元)</span></div>
      <div class="shoppingTrolley-settlement-button">立即结算</div>
    </div>
  </div>
</template>

<script>
import Header from './common/Header'
import chengzi from '../assets/img/home/chengzi.png'
import delete_img from '../assets/img/shoppingTrolley/delete.png'
import IncreaseNumber from '../components/IncreaseNumber'
export default {
  name: 'ShoppingTrolley',
  data() {
    return {
      delete_img: delete_img,
      shoppingTrolley_list: [
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: 100,
          sales: 200
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: 100,
          sales: 200
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: 100,
          sales: 200
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: 100,
          sales: 200
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: 100,
          sales: 200
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: 100,
          sales: 200
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: 100,
          sales: 200
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: 100,
          sales: 200
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: 100,
          sales: 200
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: 100,
          sales: 200
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: 100,
          sales: 200
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: 100,
          sales: 200
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: 100,
          sales: 200
        },
        {
          img: chengzi,
          pruduct: '橙子',
          description: '马来西亚进口鲜甜橙子一份3个',
          price: 100,
          sales: 200
        },
      ]
    }
  },
  components: {
    Header, IncreaseNumber
  }
}
</script>
