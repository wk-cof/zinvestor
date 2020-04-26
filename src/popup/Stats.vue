<template>
  <div>
    <input type="text" v-model="price">
    <input type="number" v-model="hoa">
    <input type="text" v-model="taxes">
    <input type="text" v-model="homeInsurance">
    <input type="text" v-model="rentEstimate">
  </div>
</template>

<script>
export default {
  props: [
    'price',
    'hoa',
    'taxes',
    'homeInsurance',
    'rentEstimate',
  ],
    // price: Number,
    // hoa: Number,
    // taxes: Number,
    // homeInsurance: Number,
    // rentEstimate: Number,
  // },
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
</style>
