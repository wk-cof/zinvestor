<template>
  <div>
    <input type="text" v-bind="price">
    <input type="number" v-bind="price">
    <input type="text" v-bind="price">
    <input type="text" v-bind="price">
    <input type="text" v-bind="price">
  </div>
</template>

<script>
export default {
  props: {
    price: Number,
    hoa: Number,
    taxes: Number,
    homeInsurance: Number,
    rentEstimate: Number,
  },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>
