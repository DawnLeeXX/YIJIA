<style lang="scss" scoped type="text/scss">
  .shippingAddress {
    padding-top: 80px;
    padding-bottom: 20px;
    .shippingAddress-ul {
      width: 92%;
      margin: 0 auto;
      .shippingAddress-li {
        margin-top: 20px;
        width: 100%;
        border-radius: 10px;
        padding: 20px 0;
        background-color: white;
        -webkit-box-shadow: 2px 2px 10px #eee;
        -moz-box-shadow: 2px 2px 10px #eee;
        box-shadow: 2px 2px 10px #eee;
        .shippingAddress-left {
          margin-left: 20px;
        }
        .shippingAddress-select {
          margin-right: 20px;
          width: 20px;
          border-radius: 50%;
          height: 20px;
          border: 3px solid #e1e0df;
          &.active {
            background: #ee7a1c;
          }
        }
      }
    }
  }
</style>

<template>
  <div class="shippingAddress">
    <Header
      left="back_member"
      title="收货地址"
    />
    <ul class="shippingAddress-ul">
      <li class="shippingAddress-li flex-row-wrap-space_between-center" v-for="item in address_list" :key="item.name">
        <div class="shippingAddress-left">
          <div>收货人: {{item.name}}</div>
          <div>联系电话: {{item.phone}}</div>
          <div>地址: {{item.address}}</div>
        </div>
        <div class="shippingAddress-select" :class="item.default ? 'active' : ''"/>
      </li>
    </ul>
    <mt-button
      type="default"
      class="common-button-style"
      @click="$router.push('/shipping_address_add')"
    >新增收货地址</mt-button>
  </div>
</template>

<script>
  import Header from '../common/Header'
  export default {
    name: 'ShippingAddress',
    data() {
      return {
        address_list: [
          {
            name: 'asdsad',
            phone: 'asd',
            address: 'asd',
            default: true
          },
          {
            name: 'ertrt',
            phone: 'tytyt',
            address: 'tyty',
            default: false
          },
          {
            name: 'opop',
            phone: 'opop',
            address: 'opop',
            default: false
          },
        ]
      }
    },
    components: {
      Header
    }
  }
</script>
