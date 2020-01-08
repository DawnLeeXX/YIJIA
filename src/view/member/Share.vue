<style lang="scss" scoped type="text/scss">
  .Share {
    width: 100vw;
    height: 100vh;
    padding-top: 30px;
    background: linear-gradient(#ea3608, #ef7a1c);
    .share-phone {
      width: 100vw;
      height: 100vh;
      background: url("../../assets/img/share/share_phone.png") no-repeat;
      background-size: 100%;
      .share-phone-qr-side {
        width: 350px;
        height: 350px;
        background: url("../../assets/img/share/biankuang.png") no-repeat;
        background-size: cover;
        margin: 0 auto;
        padding: 10px;
        img {
          width: 100%;
          height: 100%;
        }
      }
      .save-picture {
        width: 400px;
        height: 80px;
        margin-top: 60px;
        background: $color-primary;
      }
      .send-friend {
        width: 400px;
        height: 80px;
        margin-top: 60px;
      }
    }
  }
</style>

<template>
    <div class="Share">
      <Header
        left="back_member"
        title="我的分享"
      />
      <div class="share-phone">
        <div style="height: 140px;width: 100vw"></div>
        <div class="share-phone-qr-side">
          <img :src="QRcode" alt="QRcode">
        </div>
        <mt-button
          type="default"
          class="common-button-style save-picture"
        >保存图片</mt-button>
        <mt-button
          type="default"
          class="common-button-style send-friend"
        >发送好友</mt-button>
      </div>
    </div>
</template>

<script>
  import Header from '../common/Header'
  import QRcode from '../../assets/img/share/QRcode.png'
  export default {
    name: 'Share',
    data() {
      return {
        QRcode: QRcode
      }
    },
    components: {
      Header
    }
  }
</script>
