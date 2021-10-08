<template>
  <div class="columns">
    <movie
      :selected="movieItem === details.movie"
      :movie="movieItem"
      :key="movieItem"
      v-for="movieItem in movies"
    />
  </div>
</template>

<script>
import { mapGetters } from "vuex";
import Movie from "./Movie.vue";

export default {
  props: {
    currentProps: {
      selected: Boolean,
    },
  },
  computed: {
    ...mapGetters(["details", "movies"]),
  },
  components: {
    Movie,
  },
};
</script>