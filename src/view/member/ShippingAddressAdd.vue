<style lang="scss" scoped type="text/scss">
  .shippingAddressAdd {
    padding-top: 80px;
  }

</style>
<style>
  .shippingAddressAdd .cell-moren .mint-cell-wrapper {
    height: 80px;
  }
</style>
<template>
  <div class="shippingAddressAdd">
    <Header
      left="back"
      title="新增收货地址"
    />
    <mt-field style="height: 40px;background: white" label="收货人" placeholder="请输入收货人" v-model="datalist.name"></mt-field>
    <mt-field style="height: 40px;background: white" type="number" label="联系电话" placeholder="请输入联系电话" v-model="datalist.phone"></mt-field>
    <mt-field style="background: white" rows="3" type="textarea" label="详细地址" placeholder="请输入详细地址" v-model="datalist.address"></mt-field>
    <mt-cell class="cell-moren" style="background: white;margin-top: 10px" title="设为默认地址"><mt-switch v-model="datalist.moren"></mt-switch></mt-cell>
    <mt-button
      type="default"
      class="common-button-style"
      @click="$router.push('/shipping_address_add')"
    >确认收货地址</mt-button>
  </div>
</template>

<script>
  import Header from '../common/Header'
  export default {
    name: 'ShippingAddressAdd',
    data() {
      return {
        datalist: {
          name:'',
          phone: '',
          address: '',
          moren: true
        }
      }
    },
    components: {
      Header
    }
  }
</script>
