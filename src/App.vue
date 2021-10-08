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
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import StepWrapper from "./components/StepWrapper.vue";
import Controls from "./components/Controls.vue";
import FieldLabel from "./components/FieldLabel.vue";

export default {
  components: {
    FieldLabel,
    Controls,
    StepWrapper,
  },
  computed: {
    ...mapGetters([
      "step",
      "fields",
      "firstStep",
      "stepItems",
      "details",
      "components",
    ]),
  },
};
</script>