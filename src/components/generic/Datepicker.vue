<template>
  <datepicker
    :enableTimePicker="false"
    @clearValue="updateDate('')"
    @update:modelValue="updateDate($event)"
  />
  <!-- <div class="field">
    <label class="label">{{ label }}</label>
    <div class="control">
      <datepicker
        :modelValue="$store.state.values.date"
        :enableTimePicker="false"
        @clearValue="updateDate('')"
        @update:modelValue="updateDate($event)"
      />
    </div>
    <p :class="['help', validityState === 'invalid' && 'is-danger']">
      {{ helperText }}
    </p>
  </div> -->
</template>

<script>
import Datepicker from "vue3-date-time-picker";
import { mapMutations } from "vuex";

export default {
  props: {
    currentProps: {},
  },
  components: {
    Datepicker,
  },
  methods: {
    ...mapMutations(["updateDate"]),
  },
};
</script>