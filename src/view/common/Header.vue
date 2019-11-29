<style lang="scss" scoped type="text/scss">
  .header-contain {
    position: fixed;
    width: 100vw;
    top: 0;
    left: 0;
    right: 0;
  }
</style>

<template>
  <div class="header-contain">
    <mt-header :title="title ? title : ''">
      <router-link v-if="left" to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
      <div v-if="right === 'logout'" slot="right">
        退出
      </div>
    </mt-header>
  </div>
</template>

<script>
  export default {
    props: {
      title: String,
      left: String,
      right: String
    },
    name: 'Header',
    data() {
        return {}
    }
  }
</script>
