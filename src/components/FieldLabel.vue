<template>
  <p :class="['is-size-3', !valid && 'has-text-danger']">{{ label }}</p>
</template>

<script>
export default {
  props: {
    valid: Boolean,
    label: String,
  },
};
</script>