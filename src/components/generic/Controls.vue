<template>
  <div class="field is-grouped">
    <div class="control">
      <button v-if="showPrevBtn" @click="previous()" class="button is-link">
        Previous
      </button>
    </div>
    <div class="control">
      <button v-if="showNextBtn" @click="next()" class="button is-link">
        Next
      </button>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";

export default {
  methods: {
    ...mapMutations(["next", "previous"]),
  },
  computed: {
    ...mapGetters(["showNextBtn", "showPrevBtn"]),
  },
};
</script>