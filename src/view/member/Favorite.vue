<style lang="scss" scoped type="text/scss">
  .Favorite {
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
            .go-to-pay {
              margin-top: 30px;
              width: 55vw;
            }
            .favorite-button {
              background: none;
              border-radius: 50px;
              height: 40px;
              width: 100px;
              border: 2px solid #a8a8a8;
              color: #a8a8a8;
            }
          }
        }
      }
    }
  }
</style>

<template>
  <div class="Favorite">
    <Header
      left="back_member"
      title="我的收藏"
    />
    <div class="flex-column-wrap-center-center">
      <ul class="flex-column-wrap-flex_start-center shoppingTrolley-all">
        <li v-for="item in shoppingTrolley_list">
          <div class="flex-row-wrap-flex_start-center shoppingTrolley-item">
            <img :src="item.img" alt="">
            <div class="shoppingTrolley-item-right flex-column-wrap-flex_start-flex_start">
              <div>[橙子]马来西亚进口鲜甜橙子一份3个</div>
              <div class="flex-row-wrap-space_between-center go-to-pay">
                <div>p100</div>
                <mt-button
                  type="default"
                  class="favorite-button"
                >购买</mt-button>
              </div>
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
    name: 'Favorite',
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
