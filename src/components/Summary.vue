<template><pre>{{ details }}</pre>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["details"]),
  },
};
</script>