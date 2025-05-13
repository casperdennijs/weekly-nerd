<template>
  <div class="blog-card">
    <h3 class="blog-title">{{ title }}</h3>
    <p class="blog-excerpt">{{ excerpt }}</p>
    <NuxtLink :to="`/blogs/${id}`" class="read-more">Read more</NuxtLink>
  </div>
</template>

<script setup>
defineProps({
  id: {
    type: [String, Number],
    required: true
  },
  title: {
    type: String,
    required: true
  },
  excerpt: {
    type: String,
    required: true  }
})
</script>

<style scoped>
/* Styles moved to app.css */
</style>
