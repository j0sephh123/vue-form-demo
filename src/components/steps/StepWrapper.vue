<template>
  <div class="has-text-centered is-size-3">{{ step }}/{{ availableSteps }} step</div>
  <slot></slot>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  props: {
    step: Number,
  },
  computed: {
    ...mapGetters(["availableSteps"]),
  },
};
</script>