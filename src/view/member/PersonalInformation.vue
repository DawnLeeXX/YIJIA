<style lang="scss" scoped type="text/scss">
  .PersonalInformation {
    padding-top: 80px;
  }
</style>

<template>
    <div class="PersonalInformation">
      <Header
        left="back_member"
        title="个人资料"
      />
      <mt-field style="height: 40px;background: white" label="用户昵称" v-model="datalist.nickname"></mt-field>
      <mt-field style="height: 40px;background: white" type="tel" label="电话号码" placeholder="请输入联系电话" v-model="datalist.phone"></mt-field>
      <mt-field style="height: 40px;background: white" rows="3" type="email" label="电子邮箱" placeholder="请输入详细地址" v-model="datalist.email"></mt-field>
      <mt-button
        type="default"
        class="common-button-style"
      >确认修改</mt-button>
    </div>
</template>

<script>
  import Header from '../common/Header'
  export default {
    name: 'PersonalInformation',
    data() {
      return {
        datalist: {
          nickname: '就是这样',
          phone: '123213231',
          email: '1232143@qq.com'
        }
      }
    },
    components: {
      Header
    }
  }
</script>
