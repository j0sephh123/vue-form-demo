<template>
  <div class="column">
    <div @click="updateField({ key: 'movie', value: movie })" class="card">
      <div class="card-image">
        <figure class="image is-4by3">
          <img
            src="https://bulma.io/images/placeholders/1280x960.png"
            alt="Placeholder image"
          />
        </figure>
      </div>
      <div class="card-content">
        <div class="media">
          <p :class="[selected && 'is-underlined', 'title', 'is-6']">
            {{ movie }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapMutations } from "vuex";

export default {
  methods: {
    ...mapMutations(["updateField"]),
  },
  props: { movie: String, selected: Boolean },
};
</script>