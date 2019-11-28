<style lang="scss" scoped type="text/scss">

</style>

<template>
  <div class="Header">
    <mt-header :title="title ? title : ''">
      <router-link v-if="left" to="/" slot="left">
        <mt-button icon="back"></mt-button>
      </router-link>
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
