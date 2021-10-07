<template>
  second step

  <Item :type="item" :key="item" v-for="item in currentStep.items" />
  <!-- <template :key="id" v-for="[id, field] in step2Fields">
    <field
      :id="id"
      :errorText="field.errorText"
      :helperText="field.helperText"
      :label="field.label"
      :type="field.type"
      :validityState="field.validityState"
    />
  </template> -->
</template>

<script>
import { mapGetters } from "vuex";
import Field from "../generic/Field.vue";

export default {
  components: {
    Field,
  },
  computed: {
    ...mapGetters(["step2Fields"]),
  },
};
</script>