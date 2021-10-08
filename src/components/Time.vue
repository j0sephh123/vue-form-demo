<template>
  <div class="field">
    <div class="control">
      <div class="tags">
        <span
          @click="updateField({ key: 'time', value: time })"
          :key="time"
          v-for="time in times"
          :class="[
            'tag',
            'is-size-5',
            details.time === time && 'is-underlined',
          ]"
          >{{ time }}</span
        >
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  components: {},
  props: {
    currentProps: {},
  },
  methods: {
    ...mapMutations(["updateField"]),
  },
  computed: {
    ...mapGetters(["times", "details"]),
  },
};
</script>