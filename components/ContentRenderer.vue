<template>
  <div v-html="parsedContent" class="content-renderer"></div>
</template>

<script setup>
const props = defineProps({
  value: {
    type: Object,
    required: true
  }
});

const parsedContent = computed(() => {
  if (!props.value || !props.value.body) return '';
  return props.value.body;
});
</script>

<style scoped>
/* Styles moved to app.css */
</style>
