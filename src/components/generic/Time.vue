<template>
  <div class="tags">
    <span
      @click="updateField({ key: 'time', value: time })"
      :key="time"
      v-for="time in times"
      :class="['tag', details.time === time && 'is-underlined']"
      >{{ time }}</span
    >
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