<template>
  <div
    v-if="movie.validityState === 'invalid'"
    class="is-size-3 has-text-danger"
  >
    {{ movie.errorText }}
  </div>
  <div class="is-size-3">{{ movie.label }}</div>
  <div class="columns is-multiline">
    <movie
      :selected="movieValue === movieItem"
      :movie="movieItem"
      :key="movieItem"
      v-for="movieItem in movies"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Movie from "../generic/Movie.vue";

export default {
  components: {
    Movie,
  },
  computed: {
    ...mapGetters([])
  }
};
</script>