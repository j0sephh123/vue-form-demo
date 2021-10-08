<template>
  <div class="field">
    <div class="control">
      <input
        @input="
          updateField({ key: currentProps.id, value: $event.target.value })
        "
        class="input"
        :type="currentProps.type"
        :value="details[currentProps.id]"
      />
    </div>
    <p class="help">{{ currentProps.helperText }}</p>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  props: {
    currentProps: {
      id: String,
      type: String,
      helperText: String,
    },
  },
  methods: {
    ...mapMutations(["updateField"]),
  },
  computed: {
    ...mapGetters(["details"]),
  },
};
</script>