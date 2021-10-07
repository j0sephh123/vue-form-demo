<template>
  <div class="section column is-6 is-offset-3">
    <step-wrapper :step="step">
      <template :key="item" v-for="item in stepItems">
        <field-label
          :valid="fields[item]['valid']"
          :label="fields[item]['label']"
        />
        <component :currentProps="fields[item]" :is="components[item]" />
      </template>
    </step-wrapper>
    <controls />
    <pre>{{ details }}</pre>
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StepWrapper from "./components/steps/StepWrapper.vue";

import Controls from "./components/generic/Controls.vue";
import FieldLabel from "./components/generic/FieldLabel.vue";

export default {
  components: {
    FieldLabel,
    Controls,
    StepWrapper,
  },
  computed: {
    ...mapGetters([
      "state",
      "step",
      "values",
      "fields",
      "steps",
      "firstStep",
      "secondStep",
      "availableSteps",
      "stepItems",
      "components",
      "details",
    ]),
  },
  mounted() {},
  updated() {},
};
</script>



DatePicker