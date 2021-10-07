<template>
  <field :id="currentProps.id" :type="currentProps.type" />
</template>

<script>
import Field from "./Field.vue";

export default {
  props: {
    currentProps: {
      type: String,
      id: String,
    },
  },
  components: {
    Field,
  },
};
</script>