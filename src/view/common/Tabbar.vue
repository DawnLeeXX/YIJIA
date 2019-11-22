<style lang="scss">
  .mint-tab-item {
    .mint-tab-item-icon {
      width: 100%;
      height: 40px;
      padding-bottom: 5px;
      text-align: center;
      img {
        display: inline-block;
        width: 40px;
        height: 40px;
      }
    }
  }

</style>

<template>
  <div class="tabbar-contain">
    <mt-tabbar v-model="selected" fixed>
      <mt-tab-item v-for="item in this.tabbar_list" :id="item.id" :key="item.id">
        <img slot="icon" :src="selected === item.id ? item.imgActive : item.img">
        {{item.name}}
      </mt-tab-item>
    </mt-tabbar>
  </div>
</template>

<script>
  import home from '../../assets/img/tabbar/home.png'
  import home_active from '../../assets/img/tabbar/home_active.png'
  import classify from '../../assets/img/tabbar/classify.png'
  import classify_active from '../../assets/img/tabbar/classify_active.png'
  import shopping_trolley from '../../assets/img/tabbar/shopping_trolley.png'
  import shopping_trolley_active from '../../assets/img/tabbar/shopping_trolley_active.png'
  import member from '../../assets/img/tabbar/member.png'
  import member_active from '../../assets/img/tabbar/member_active.png'
  export default {
    name: 'Tabbar',
    data() {
      var _this = this
      return {
        selected: 'home',
        tabbar_list: [
          {
            id: 'home',
            name: '首页',
            imgActive: home_active,
            img: home,
          },
          {
            id: 'classify',
            name: '分类',
            imgActive: classify_active,
            img: classify
          },
          {
            id: 'shopping_trolley',
            name: '购物车',
            imgActive: shopping_trolley_active,
            img: shopping_trolley
          },
          {
            id: 'member',
            name: '我',
            imgActive: member_active,
            img: member
          }
        ]
      }
    },
    watch: {
      selected () {
        this.$router.push(`/${this.selected}`)
      }
    }
  }
</script>
