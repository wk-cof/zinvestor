<template>
  <div>
    <h1>Zillow Investor Assistant</h1>
    Activates automatically when you are on any Zillow.com page
    <stats> </stats>

  </div>
</template>

<script>
import Stats from "./Stats.vue";
const bg = chrome.extension.getBackgroundPage();
export default {
  data () {
    Object.keys(bg.houseInfo).forEach(function (url) {
      const div = document.createElement('div');
      div.textContent = `${url}: ${JSON.stringify(bg.houseInfo[url], "", "  ")}`;
      document.body.appendChild(div);
    });

    return {

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
