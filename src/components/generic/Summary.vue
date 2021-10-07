<template><pre>{{ summary }}</pre>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  computed: {
    ...mapGetters(["summary"]),
  },
};
</script>