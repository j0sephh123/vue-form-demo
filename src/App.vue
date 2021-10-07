<template>
  <div class="section column is-6 is-offset-3">
    <step-wrapper :step="step">
      <template :key="item" v-for="item in stepItems">
        <field-label :label="fields[item]['label']" />
        <component :currentProps="fields[item]" :is="components[item]" />
      </template>
    </step-wrapper>
    <controls />
    {{ details }}
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StepWrapper from "./components/steps/StepWrapper.vue";

import Controls from "./components/generic/Controls.vue";
import Item from "./components/generic/Item.vue";
import FieldLabel from "./components/generic/FieldLabel.vue";

export default {
  components: {
    FieldLabel,
    Controls,
    Item,
    StepWrapper,
  },
  computed: {
    ...mapGetters([
      "step",
      "values",
      "fields",
      "steps",
      "firstStep",
      "secondStep",
      "currentStep",
      "availableSteps",
      "stepItems",
      "all",
      "components",
      "details",
    ]),
  },
  mounted() {},
  updated() {},
};
</script>



DatePicker