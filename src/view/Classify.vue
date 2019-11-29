<style lang="scss" scoped type="text/scss">
  .classify {
    height: 100%;
    padding-top: 80px;
    padding-bottom: 80px;
    background-color: white;
    .classify-contain {
      height: 100%;
      .classify-list {
        width: 200px;
        height: 100%;
        overflow-y: scroll;
        background-color: #f6f6f6;
        padding-bottom: 220px;
        li {
          height: 80px;
          line-height: 80px;
          border-bottom: 0.03333rem solid #e7e5e4;
          text-align: center;
          &.active {
            background: white;
            width: 195px;
            border-bottom-color: #f6f6f6;
            border-left: 5px solid $color-primary;
          }
        }
      }
      .product-list {
        height: 100%;
        flex: 1;
        overflow-y: scroll;
        padding-bottom: 220px;
        li {
          width: 100%;
          padding-top: 20px;
          padding-bottom: 20px;
          border-bottom: 2px solid #f6f6f6;
          > img {
            width: 160px;
            padding: 0 20px;
          }
          .product-list-right {
            flex: 1;
            padding-right: 20px;
            .product-list-right-price {
              color: $color-minor;
            }
            .product-list-right-keep {

            }
          }
        }
      }
    }
    .classify-settlement {
      position: fixed;
      bottom: 100px;
      left: 0;
      width: 100%;
      background: white;
      height: 100px;
      .classify-settlement-price {
        padding-left: 20px;
        .price-number {
          color: $color-primary;
        }
      }
      .classify-settlement-button {
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
    <div class="classify">
      <Header
        title="产品分类"
      />
      <div class="flex-row-wrap-space_between-flex_start classify-contain">
        <ul class="classify-list">
          <li
            :class="{active: active == item.type}"
            v-for="item in classify_list"
            @click="active = item.type"
          >
            <i></i>{{item.title}}
          </li>
        </ul>
        <ul class="product-list">
          <li v-for="item in product_list[active]" class="flex-row-wrap-space_between-center">
            <img :src="item.img" alt="">
            <div class="product-list-right">
              <div>[{{item.pruduct}}] {{item.description}}</div>
              <div class="flex-row-wrap-space_between-center">
                <div><span class="product-list-right-price">p{{item.price}}</span> (库存{{item.keep}}件)</div>
                <increase-number v-model="item.sales" />
              </div>
            </div>
          </li>
        </ul>
      </div>
      <div class="classify-settlement flex-row-wrap-space_between-center">
        <div class="classify-settlement-price"><span>合计:</span> <span class="price-number">P550(￥67.9元)</span></div>
        <div class="classify-settlement-button">立即结算</div>
      </div>
    </div>
</template>

<script>
import Header from './common/Header'
import chengzi from '../assets/img/home/chengzi.png'
import IncreaseNumber from '../components/IncreaseNumber'
export default {
  name: 'Classify',
  data() {
    return {
      active: 0,
      classify_list: [
        {
          title: '休闲食品',
          type: 0
        },
        {
          title: '饮料冲剂',
          type: 1
        },
        {
          title: '油粮副食',
          type: 2
        },
        {
          title: '香烟酒水',
          type: 3
        },
        {
          title: '个人护洁',
          type: 4
        },
        {
          title: '美容美妆',
          type: 5
        },
        {
          title: '医疗保健',
          type: 6
        },
        {
          title: '亿家生鲜',
          type: 7
        }
      ],
      product_list: [
        [
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
        ],
        [
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
        ],
        [
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
        ],
        [
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
        ],
        [
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
        ],
        [
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
        ],
        [
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
        ],
        [
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
          {
            img: chengzi,
            pruduct: '橙子',
            description: '马来西亚进口鲜甜橙子一份3个',
            price: 100,
            sales: 200,
            keep: 20
          },
        ]
      ]
    }
  },
  components: {
    Header, IncreaseNumber
  }
}
</script>
