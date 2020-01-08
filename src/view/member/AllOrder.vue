<style lang="scss" scoped type="text/scss">
  .AllOrder {
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
  }
</style>

<template>
  <div class="AllOrder">
    <Header
      left="back_member"
      title="全部订单"
    />
    <div class="flex-column-wrap-center-center">
      <ul class="flex-column-wrap-flex_start-center shoppingTrolley-all">
        <li v-for="item in shoppingTrolley_list">
          <div class="flex-row-wrap-flex_start-center shoppingTrolley-item">
            <img :src="item.img" alt="">
            <div class="shoppingTrolley-item-right flex-column-wrap-flex_start-flex_start">
              <div>订单号: {{item.order}}</div>
              <div>订单状态: {{item.status}}</div>
              <div>订单总额: {{item.price}}</div>
              <div>订单时间: {{item.time}}</div>
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
    name: 'AllOrder',
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
