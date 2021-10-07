<template>
  <p class="['is-size-3']">{{ label }} {{ valid }}</p>
</template>

<script>
export default {
  props: {
    valid: Boolean,
    label: String,
  },
};
</script>