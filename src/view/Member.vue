<style lang="scss" scoped type="text/scss">
  .member {
    padding-top: 80px;
    padding-bottom: 100px;
    .member-top {
      padding: 30px;
      padding-bottom: 80px;
      position: relative;
      @extend .theme-gradient;
      .member-bg-img {
        height: 45px;
        width: 100vw;
        position: absolute;
        bottom: 0;
        left: 0;
      }
      .member-avator {
        width: 180px;
        border-radius: 50%;
      }
      .member-right-button {
        color: white;
        padding-left: 30px;
        font-size: 35px;
        button {
          color: white;
          background: rgba(255,255,255,.3);
          border: 0;
          padding: 10px 40px;
          border-radius: 30px;
          font-size: 25px;
        }
      }
    }
    .member-menu-list {
      background: white;
      padding: 30px 0 15px 0;
      text-align: center;
      color: #525e6d;
      font-size: 26px;
      img {
        width: 90px;
      }
      .member-menu-name {
        padding-top: 10px;
      }
    }
    .member-router {
      margin-top: 20px;
    }
  }
</style>
<style>
  .member .mint-cell-allow-right::after {
    width: 12px;
    height: 12px;
  }
  .member .mint-cell {
    margin-bottom: 5px;
    padding: 10px 0;
  }
  .member .mint-cell-title img {
    display: inline-block;
    width: 30px;
    padding: 0 15px;
  }
</style>
<template>
    <div class="member">
      <Header
        title="个人中心"
        right="logout"
      />
      <div class="member-top flex-row-wrap-flex_start-center">
        <img class="member-bg-img" src="../assets/img/member/bg-img.png" alt="">
        <img class="member-avator" src="../assets/img/member/avator.jpg" alt="avator">
        <div class="member-right-button">
          <div>暂无登录</div>
          <div>
            <button>登录</button>
            <button>注册</button>
          </div>
        </div>
      </div>
      <ul class="flex-row-wrap-space_around-center member-menu-list">
        <li v-for="item in member_menu_list" @click="routerTo(item.type)">
          <div class="flex-row-wrap-center-center"><img :src="item.img" alt=""></div>
          <div class="member-menu-name">{{item.name}}</div>
        </li>
      </ul>
      <div class="member-router">
        <mt-cell v-for="item in member_router_list" :to="item.routerName" is-link :title="item.name">
          <img slot="icon" :src="item.img">
        </mt-cell>
      </div>
    </div>
</template>

<script>
import Header from './common/Header'
import icon01 from '../assets/img/member/icon01.png'
import icon02 from '../assets/img/member/icon02.png'
import icon03 from '../assets/img/member/icon03.png'
import icon04 from '../assets/img/member/icon04.png'
import memberIcon01 from '../assets/img/member/member_icon_01.png'
import memberIcon02 from '../assets/img/member/member_icon_02.png'
import memberIcon03 from '../assets/img/member/member_icon_03.png'
import memberIcon04 from '../assets/img/member/member_icon_04.png'
import memberIcon05 from '../assets/img/member/member_icon_05.png'
import memberIcon06 from '../assets/img/member/member_icon_06.png'
import memberIcon07 from '../assets/img/member/member_icon_07.png'
export default {
  name: 'Member',
  data() {
    return {
      member_menu_list: [
        {
          type: 1,
          name: '全部订单',
          img: icon01
        },
        {
          type: 2,
          name: '未付款',
          img: icon02
        },
        {
          type: 3,
          name: '收货地址',
          img: icon03
        },
        {
          type: 4,
          name: '资金管理',
          img: icon04
        }
      ],
      member_router_list: [
        {
          type: 1,
          name: '个人资料',
          img: memberIcon01,
          routerName: '/personal_information'
        },
        {
          type: 2,
          name: '修改密码',
          img: memberIcon02,
          routerName: '/change_password'
        },
        {
          type: 3,
          name: '我的红包',
          img: memberIcon03,
          routerName: '/'
        },
        {
          type: 4,
          name: '退换货订单',
          img: memberIcon04,
          routerName: '/'
        },
        {
          type: 5,
          name: '我的收藏',
          img: memberIcon05,
          routerName: '/favorite'
        },
        {
          type: 6,
          name: '我的分享',
          img: memberIcon06,
          routerName: '/share'
        },
        {
          type: 7,
          name: '缺货登记',
          img: memberIcon07,
          routerName: '/'
        },
      ]
    }
  },
  components: {
    Header
  },
  methods: {
    routerTo(type) {
      switch (type) {
        case 1:
          this.$router.push('/all_order');
          break;
        case 2:
          this.$router.push('/un_paid');
          break;
        case 3:
          this.$router.push('/shipping_address');
          break;
        case 4:
          this.$router.push('/');
          break;
      }
    }
  }
}
</script>
