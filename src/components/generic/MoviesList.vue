<template>
  <div class="section columns">
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
import { movies } from "../../constants";
import Movie from "./Movie.vue";

export default {
  props: {
    currentProps: {
      selected: Boolean,
    },
  },
  computed: {
    ...mapGetters(["details"]),
  },
  components: {
    Movie,
  },
  data() {
    return {
      movies,
    };
  },
};
</script>