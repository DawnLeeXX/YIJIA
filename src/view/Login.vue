<style lang="scss" scoped>
  .login-contain {
    height: 100vh;
    background: white;
    .login-logo {
      width: 40%;
      position: fixed;
      left: 30%;
      top: 80px;
    }
    .login-logo-bg {
      width: 100%;
    }
    .login-input-button {
      width: 400px;
      margin: 0 auto;
    }
    .login-input {
      margin-top: 20px !important;
      padding-bottom: 20px;
      width: 500px;
      border-bottom: 1px solid #d6d6d6;
      input {
        height: 80px;
      }
    }
    .login-button {
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
    .login-isPassword-contain {
      padding: 20px 0;
      width: 500px;
    }
  }
</style>

<template>
  <div class="login-contain">
    <img class="login-logo" src="../assets/img/logo.png" alt="login-logo">
    <img class="login-logo-bg" src="../assets/img/login/login_bg.jpg" alt="login-login-logo-bg"/>
    <div class="flex-column-wrap-center-center">
      <mt-field
        class="login-input"
        placeholder="用户名"
        v-model="form.username">
      </mt-field>

      <mt-field
        class="login-input"
        type="password"
        placeholder="密码（最少6位数字及字母组合)"
        v-model="form.password">
      </mt-field>

      <div
        class="login-isPassword-contain"
      >
        <mt-switch  class="login-isPassword" v-model="isPassword">
          记住密码
        </mt-switch>
      </div>

      <mt-button @click.prevent="login" class="login-button" type="default">登录</mt-button>
      <div
        @click="register"
      >
        未有账号，去注册?
      </div>

    </div>
  </div>
</template>

<script>
  import {mapActions} from 'vuex'
  import {loginInHttp} from '../api/authorizations'
  export default {
    name: 'Login',
    data() {
      return {
        form: {
          username: this.$store.state.loginForm ? this.$store.state.loginForm.username : '',
          password: this.$store.state.loginForm ? this.$store.state.loginForm.password : '',
        },
        isPassword: this.$store.state.loginForm ? true : false
      }
    },
    methods: {
      ...mapActions([
        'setloginForm' // 设置vuex state loginForm值
      ]),
      register() {
        this.$router.push('register')
      },
      login() {
        // 登录请求
        loginInHttp({name: this.form.username, password: this.form.password}).then(res => {
          // 是否存储账号密码
          this.storeUserPassword()
          // 跳转到home页面
          this.$router.push('home')
        })
      },
      storeUserPassword() {
        if (this.isPassword) {
          this.setloginForm(Object.assign({},this.form))
        } else {
          this.setloginForm(null)
        }
      }
    }
  }
</script>
