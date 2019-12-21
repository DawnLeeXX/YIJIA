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
      <a v-if="left === 'back'" slot="left" @click="$router.history.go(-1)">
        <mt-button icon="back"></mt-button>
      </a>
      <router-link v-else-if="left === 'back_member'" slot="left" to="/member">
        <mt-button icon="back"></mt-button>
      </router-link>
      <div @click="logout" v-if="right === 'logout'" slot="right">
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
    },
    methods: {
      logout () {
        this.$router.push('login')
      }
    }
  }
</script>
