<style lang="scss" scoped type="text/scss">
  .Unpaid {
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
          .wait-paid {
            color: $color-minor;
            padding-right: 20px;
          }
          .total-price {
            border-top: 1px solid #eee;
            margin-top: 20px;
            padding-top: 20px;
            padding-right: 20px;
            .total-all-price{
              font-size: 30px;
              margin-left: 20px;
            }
          }
          .unpaid-button {
            background: none;
            border-radius: 50px;
            height: 50px;
            width: 160px;
            border: 2px solid #a8a8a8;
            margin-top: 10px;
            color: #a8a8a8;
            margin-right: 20px;
            &.special-button {
              border-color: $color-minor;
              color: $color-minor;
            }
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
  }
</style>

<template>
  <div class="Unpaid">
    <Header
      left="back_member"
      title="未付款"
    />
    <div class="flex-column-wrap-center-center">
      <ul class="flex-column-wrap-flex_start-center shoppingTrolley-all">
        <li v-for="item in shoppingTrolley_list">
          <div class="shoppingTrolley-item">
            <div class="flex-row-wrap-flex_end-center wait-paid">等待卖家付款</div>
            <div class="flex-row-wrap-flex_start-center">
              <img :src="item.img" alt="">
              <div class="shoppingTrolley-item-right flex-column-wrap-flex_start-flex_start">
                <div>橙子】马来西亚进口鲜甜橙子一份3个</div>
                <div>P111 × 22</div>
              </div>
            </div>
            <div class="flex-row-wrap-flex_end-center total-price">共22件商品 <span class="total-all-price">合计：p688</span></div>
            <div class="flex-row-wrap-flex_end-center">
              <mt-button
                type="default"
                class="unpaid-button"
              >联系客服</mt-button>
              <mt-button
                type="default"
                class="unpaid-button"
              >取消订单</mt-button>
              <mt-button
                type="default"
                class="unpaid-button special-button"
              >付款</mt-button>
            </div>

          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  import Header from '../common/Header'
  import chengzi from '../../assets/img/home/chengzi.png'

  export default {
    name: 'Unpaid',
    data() {
      return {
        shoppingTrolley_list: [
          {
            img: chengzi,
            order: 34534534543545,
            status: '已完成',
            price: 100,
            time: '1992-10-03'
          },
          {
            img: chengzi,
            order: 34534534543545,
            status: '已完成',
            price: 100,
            time: '1992-10-03'
          },
          {
            img: chengzi,
            order: 34534534543545,
            status: '已完成',
            price: 100,
            time: '1992-10-03'
          },
          {
            img: chengzi,
            order: 34534534543545,
            status: '已完成',
            price: 100,
            time: '1992-10-03'
          },
          {
            img: chengzi,
            order: 34534534543545,
            status: '已完成',
            price: 100,
            time: '1992-10-03'
          },
          {
            img: chengzi,
            order: 34534534543545,
            status: '已完成',
            price: 100,
            time: '1992-10-03'
          },
          {
            img: chengzi,
            order: 34534534543545,
            status: '已完成',
            price: 100,
            time: '1992-10-03'
          },
          {
            img: chengzi,
            order: 34534534543545,
            status: '已完成',
            price: 100,
            time: '1992-10-03'
          },
          {
            img: chengzi,
            order: 34534534543545,
            status: '已完成',
            price: 100,
            time: '1992-10-03'
          },
          {
            img: chengzi,
            order: 34534534543545,
            status: '已完成',
            price: 100,
            time: '1992-10-03'
          },
          {
            img: chengzi,
            order: 34534534543545,
            status: '已完成',
            price: 100,
            time: '1992-10-03'
          },
        ]
      }
    },
    components: {
      Header
    }
  }
</script>
