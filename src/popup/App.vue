<template>
  <div>
    <h3>Zillow Investor Assistant</h3>
    Activates automatically when you are on any Zillow.com page

    <stats
      :price="unitDetails.price"
      :hoa="unitDetails.hoa"
      :taxes="unitDetails.taxes"
      :home-insurance="unitDetails.homeInsurance"
      :rent-estimate="unitDetails.rentEstimate"> </stats>

  </div>
</template>

<script>
import Stats from "./Stats.vue";
import { BModal, VBModal, BButton } from 'bootstrap-vue';
const bg = chrome.extension.getBackgroundPage();
export default {
  data () {
    return {
      unitDetails: {
        price: bg.houseInfo.price || 0,
        hoa: bg.houseInfo.hoa || 0,
        taxes: bg.houseInfo.taxes || 0,
        homeInsurance: bg.houseInfo.homeInsurance || 0,
        rentEstimate: bg.houseInfo.rentEstimate || 0,
      }
    }
  },
  components: {
   Stats,
   BButton
 },
}
</script>

<style lang="scss" scoped>
  //Be sure to @import or define your custom variable values before including Bootstrap SCSS (bootstrap.scss),
  // and include BootstrapVue SCSS (bootstrap-vue.scss) after that to ensure variables are set up correctly.
  @import 'node_modules/bootstrap/scss/bootstrap';
  @import 'node_modules/bootstrap-vue/src/index.scss';
p {
  font-size: 20px;
}
</style>
