<template>
  first step
  <!-- {{ currentStep }} -->

  <!-- <Item :type="item" :key="item" v-for="item in currentStep.items" /> -->

  <!-- {{ steps }} -->

  <!-- <movie-field />

  <datepicker
    :errorText="dateFields.errorText"
    :helperText="dateFields.helperText"
    :label="dateFields.label"
    :validityState="dateFields.validityState"
  />

  <div class="has-text-danger" v-if="timeValidity === 'invalid'">
    {{ timeErrorText }}
  </div>
  <div v-if="movieValue.length > 0 && date.length > 0" class="tags">
    <span
      @click="updateField({ key: 'time', value: hour })"
      :key="hour"
      v-for="hour in availableHours"
      :class="['tag', hour === time && 'is-underlined']"
      >{{ hour }}</span
    >
  </div>

  <field
    id="tickets"
    :errorText="ticketFields.errorText"
    :helperText="ticketFields.helperText"
    :label="ticketFields.label"
    :type="ticketFields.type"
    :validityState="ticketFields.validityState"
  /> -->
</template>

<script>
import { mapGetters, mapMutations } from "vuex";
import { movies } from "../../constants";
import Datepicker from "../generic/Datepicker.vue";

import Field from "../generic/Field.vue";
import MovieField from "../generic/MovieField.vue";

export default {
  data() {
    return {
      movies,
    };
  },
  components: {
    Field,
    Datepicker,
    MovieField,
  },
  computed: {
    ...mapGetters(["currentStep"]),
  },
  methods: {
    ...mapMutations(["updateField"]),
  },
};
</script>