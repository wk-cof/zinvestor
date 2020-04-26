<template>
  <b-form-group
    :id="`${name}-input-group`"
    :label="label"
    :label-for="`${name}-input`"
    :description="description"
  >
  <b-form-input
      :id="`${name}-input`"
      v-model="value"
      @change="onChange"
      type="number"
      :placeholder="`Enter ${name}`"
    ></b-form-input>
  </b-form-group>
</template>

<script>
import { BFormGroup, BFormInput } from 'bootstrap-vue';

export default {
  props: ['value', 'name', 'label', 'description'],
  data () {
    return {

    }
  },
  components: {
    BFormGroup,
    BFormInput
  },
  methods: {
    onChange: function (newVal) {
      this.$emit('change', newVal);
    }
  }

}
</script>

<style lang="scss" scoped>
</style>
