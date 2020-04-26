<template>
  <div>
    <h1>Zillow Investor Assistant</h1>
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
const bg = chrome.extension.getBackgroundPage();
export default {
  data () {
    // Object.keys(bg.houseInfo).forEach(function (url) {
    //   const div = document.createElement('div');
    //   div.textContent = `${url}: ${JSON.stringify(bg.houseInfo[url], "", "  ")}`;
    //   document.body.appendChild(div);
    // });

    debugger;

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
   Stats
 },
}
</script>

<style lang="scss" scoped>
p {
  font-size: 20px;
}
</style>
