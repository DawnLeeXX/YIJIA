<style lang="scss" scoped>
  .home-contain {
    background: $color-primary;
    padding-bottom: 20px;
  }
</style>

<template>
  <div class="home-contain">
    <div>home {{token}}</div>
    <mt-button type="primary">primary</mt-button>
  </div>
</template>

<script>
  export default {
    name: 'Home',
    data() {
        return {}
    },
    computed: {
      token () {
        return this.$store.state.token
      }
    }
  }
</script>
