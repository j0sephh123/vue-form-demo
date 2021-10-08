<template>
  <div class="field">
    <div class="control">
      <datepicker
        :enableTimePicker="false"
        @clearValue="updateDate('')"
        @update:modelValue="updateDate($event)"
      />
    </div>
  </div>
</template>

<script>
import Datepicker from "vue3-date-time-picker";
import { mapMutations } from "vuex";

export default {
  components: {
    Datepicker,
  },
  methods: {
    ...mapMutations(["updateDate"]),
  },
};
</script>