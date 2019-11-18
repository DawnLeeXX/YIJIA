<style lang="scss" scoped type="text/scss">

</style>

<template>
  <div class="Register">
      Register
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data() {
      return {
        form: {
          username: '',
          password: '',
          confirm_password: ''
        }
      }
    }
  }
</script>
