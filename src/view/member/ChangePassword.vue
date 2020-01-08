<style lang="scss" scoped type="text/scss">
  .ChangePassword {
    padding-top: 80px;
  }
</style>

<template>
  <div class="ChangePassword">
    <Header
      left="back_member"
      title="修改密码"
    />
    <mt-field style="height: 40px;background: white" label="原始密码" placeholder="请输入原始密码" v-model="datalist.beforePassword"></mt-field>
    <mt-field style="height: 40px;background: white" label="新密码" placeholder="请输入新密码" v-model="datalist.newPassword"></mt-field>
    <mt-field style="height: 40px;background: white" label="确认密码" placeholder="请输入确认密码" v-model="datalist.affirmPassword"></mt-field>
    <mt-button
      type="default"
      class="common-button-style"
    >确认修改</mt-button>
  </div>
</template>

<script>
  import Header from '../common/Header'
  export default {
    name: 'ChangePassword',
    data() {
      return {
        datalist: {
          beforePassword: '',
          newPassword: '',
          affirmPassword: '',
        }
      }
    },
    components: {
      Header
    }
  }
</script>
