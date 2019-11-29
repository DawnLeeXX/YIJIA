<style lang="scss" scoped type="text/scss">
  .increase-number {
    width: 160px;
    .reduction, .increase {
      width: 40px;
      border-radius: 50%;
      background-color: $color-minor;
      border-color: $color-minor;
      color: white;
      height: 40px;
      line-height: 35px;
      font-size: 30px;
      -webkit-appearance: none;
      -moz-appearance: none;
      appearance: none;
    }
    input {
      text-align: center;
      width: 60px;
      height: 40px;
      line-height: 40px;
    }
  }
</style>

<template>
  <div class="increase-number flex-row-wrap-space_around-center">
    <button class="reduction" @click="reduction">-</button>
    <input type="text" v-model.number="currentValue" />
    <button class="increase" @click="increase">+</button>
  </div>
</template>

<script>
export default {
  name: 'IncreaseNumber',
  props: {
    value: {
      type: Number,
      default: 0
    }
  },
  data () {
    return {
      currentValue: this.value
    }
  },
  watch: {
    currentValue (val) {
      this.$emit('input', val)
    }
  },
  methods: {
    reduction () {
      if (this.currentValue > 0) {
        this.currentValue--
      }
    },
    increase () {
      if (this.currentValue >= 0) {
        this.currentValue++
      }
    }
  }
}
</script>
