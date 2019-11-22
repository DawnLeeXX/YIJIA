<style lang="scss" scoped>
  .register-contain {
    height: 100vh;
    background: white;
    .register-logo {
      width: 40%;
      position: fixed;
      left: 30%;
      top: 80px;
    }
    .register-logo-bg {
      width: 100%;
    }
    .register-input-button {
      width: 400px;
      margin: 0 auto;
    }
    .register-input {
      margin-top: 20px !important;
      padding-bottom: 20px;
      width: 500px;
      border-bottom: 1px solid #d6d6d6;
      input {
        height: 80px;
      }
    }
    .register-button {
      width: 500px;
      height: 80px;
      background: url("../assets/img/login/login_button.png") no-repeat white center center;
      background-size: 100% 100%;
      color: white;
      border: none;
      outline: none;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
      font-size: 34px;
      border-radius: 50px;
    }
    .register-isPassword-contain {
      padding: 20px 0;
      width: 500px;
    }
  }
</style>

<template>
  <div class="register-contain">
    <img class="register-logo" src="../assets/img/logo.png" alt="register-logo">
    <img class="register-logo-bg" src="../assets/img/login/login_bg.jpg" alt="register-register-logo-bg"/>
    <div class="flex-column-wrap-center-center">
      <mt-field
        class="register-input"
        placeholder="用户名"
        v-model="form.username">
      </mt-field>

      <mt-field
        class="register-input"
        type="password"
        placeholder="密码（最少6位数字及字母组合)"
        v-model="form.password">
      </mt-field>
      <mt-field
        class="register-input"
        type="password"
        placeholder="确认密码（最少6位数字及字母组合)"
        v-model="form.password_confirm">
      </mt-field>
      <mt-field
        class="register-input"
        type="password"
        placeholder="验证码"
        v-model="form.verification">
        <img src="" height="45px" width="100px" alt="验证码图片">
      </mt-field>
      <div style="height: 20px;width: 100%"></div>
      <mt-button @click.prevent="register" class="register-button" type="default">注册</mt-button>
      <div
        @click="backLogin"
      >
        返回登录页
      </div>

    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  export default {
    name: 'Register',
    data() {
      return {
        form: {
          username: '',
          password: '',
          password_confirm: '',
          verification: ''
        },
      }
    },
    methods: {
      ...mapActions([
        'setregisterForm' // 设置vuex state registerForm值
      ]),
      backLogin () {
        this.$router.push('login')
      },
      register() {

      }
    }
  }
</script>
