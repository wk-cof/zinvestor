<template>
  <div>
    <b-form>
      <my-form-group :value="price" name="house-price" label="Asking Price:" description="Asking unit price" @change="(newVal) => price = newVal"></my-form-group>
      <my-form-group :value="hoa" name="hoa" label="HOA:" description="Monthly HOA fee" @change="(newVal) => hoa = newVal"></my-form-group>
      <my-form-group :value="taxes" name="taxes" label="Monthly taxes:" description="Monthly taxes" @change="(newVal) => taxes = newVal"></my-form-group>
      <my-form-group :value="homeInsurance" name="home-insurance" label="Home insurance:" description="Monthly home insurance payment" @change="(newVal) => homeInsurance = newVal"></my-form-group>
      <my-form-group :value="rentEstimate" name="rent-estimate" label="Monthly rent estimate:" description="Monthly rent estimate" @change="(newVal) => rentEstimate = newVal"></my-form-group>
    </b-form>
    <h4>Computed fields</h4>
    <br>
    Annual Expenses: {{ annualExpenses }}
    <br>
    Annual Income: {{ annualIncome }}
    <br>
    Annual Profit: {{ annualProfit }}
    <br>
    Profit Margin: {{ (profitMargin * 100).toFixed(4) }}%
  </div>
</template>

<script>
import { BForm, BFormGroup, BFormInput } from 'bootstrap-vue';
import MyFormGroup from "./FormGroup.vue";

export default {
  props: [
    'price',
    'hoa',
    'taxes',
    'homeInsurance',
    'rentEstimate',
  ],
  data () {
    return {

    }
  },
  computed: {
    annualExpenses: function() {
      return 12 * (this.hoa + this.taxes + this.homeInsurance);
    },
    annualIncome: function() {
      return 11 * (this.rentEstimate || 0);
    },
    annualProfit: function() {
      return this.annualIncome - this.annualExpenses;
    },
    profitMargin: function() {
      return this.annualProfit / this.price;
    },
  },
  components: {
    BForm,
    BFormGroup,
    BFormInput,
    MyFormGroup
  }
}
</script>

<style lang="scss" scoped>
</style>
