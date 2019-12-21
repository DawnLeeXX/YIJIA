<style lang="scss" scoped type="text/scss">
  .ProductDetail {
    padding-top: 80px;
    padding-bottom: 100px;
    .swipe-container-item {
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;
      img {
        width: auto;
      }
    }
    .product-detail-contain {
      width: 96%;
      margin: 0 auto;
      .product-detail-contain-price {
        padding: 20px;
        border-top: 1px solid #afafaf;
        border-bottom: 1px solid #afafaf;
        font-size: 30px;
        & > div:nth-child(2) {
          color: $color-primary;
        }
      }
      .product-detail-contain-something {
        padding: 20px;
        font-size: 24px;
      }
    }
    .product-detail-footer {
      height: 100px;
      border-top: 1px solid #d9dcda;
      position: fixed;
      bottom: 0;
      left: 0;
      width: 100vw;
      .product-detail-button {
        width: 200px;
        height: 70px;
        line-height: 70px;
        color: white;
        font-size: 30px;
        display: block;
        border-radius: 70px;
        @extend .theme-gradient
      }
      .product-detail-button-left {
        height: 60px;
        line-height: 60px;
        margin: 0 10px;
        border-radius: 10px;
        background: #F7F7F7;
        border: 1px solid #d9d9d9;
      }
    }
  }
</style>

<template>
    <div class="ProductDetail">
      <Header
        left="back"
        title="产品详情"
      />
      <mt-swipe :auto="4000000" style="height: 300px">
        <mt-swipe-item><div class="swipe-container-item"><div><img :src="chengzi" alt=""></div></div></mt-swipe-item>
        <mt-swipe-item><div class="swipe-container-item"><div><img :src="chengzi" alt=""></div></div></mt-swipe-item>
        <mt-swipe-item><div class="swipe-container-item"><div><img :src="chengzi" alt=""></div></div></mt-swipe-item>
        <mt-swipe-item><div class="swipe-container-item"><div><img :src="chengzi" alt=""></div></div></mt-swipe-item>
      </mt-swipe>
      <div class="product-detail-contain">
        <div class="product-detail-contain-price">
          <div>限时促销 新鲜水嫩夏橙500g3个 </div>
          <div>P110.00(￥15.11元) </div>
        </div>
        <div class="product-detail-contain-something">
          <div>商品货号：D94929F929</div>
          <div>商品产地：马来西亚</div>
          <div>商品重量：500g</div>
          <div>商品库存：45</div>
          <div>商品销量：88</div>
          <div class="flex-row-wrap-flex_start-center"><div>购买数量：</div><increase-number v-model="sales" /></div>
        </div>

      </div>
      <div class="product-detail-footer flex-row-wrap-space_around-center">
        <div class="flex-row-wrap-space_around-center">
          <mt-button
            type="default"
            class="product-detail-button-left"
          ><img :src="shoucang" style="width: 15px" slot="icon">收藏</mt-button>
          <mt-button
            type="default"
            class="product-detail-button-left"
          ><img :src="kefu" style="width: 15px" slot="icon">客服</mt-button>
          <mt-button
            type="default"
            class="product-detail-button-left"
          ><img :src="gouwu" style="width: 15px" slot="icon">购物车</mt-button>
        </div>
        <mt-button
          type="default"
          class="product-detail-button"
        >加入购物车</mt-button>
      </div>
    </div>
</template>

<script>
  import Header from './common/Header'
  import chengzi from '../assets/img/home/chengzi.png'
  import IncreaseNumber from '../components/IncreaseNumber'
  import gouwu from '../assets/img/product_detail/gouwu.png'
  import kefu from '../assets/img/product_detail/kefu.png'
  import shoucang from '../assets/img/product_detail/shoucang.png'
  export default {
    name: 'ProductDetail',
    data() {
        return {
          chengzi: chengzi,
          sales: 1,
          shoucang: shoucang,
          kefu: kefu,
          gouwu: gouwu,
        }
    },
    components: {
      Header,
      IncreaseNumber
    }
  }
</script>
