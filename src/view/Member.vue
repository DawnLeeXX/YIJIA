<style lang="scss" scoped type="text/scss">

</style>

<template>
    <div class="Member">
      <Header
        title="个人中心"
        right="logout"
      />
    </div>
</template>

<script>
import Header from './common/Header'
export default {
  name: 'Member',
  data() {
    return {}
  },
  components: {
    Header
  }
}
</script>
