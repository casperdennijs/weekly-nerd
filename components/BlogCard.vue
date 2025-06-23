<template>
  <div>
    <h3>{{ title }}</h3>
    <p>{{ excerpt }}</p>
    <NuxtLink :to="`/blogs/${id}`" class="read-more" tabindex="0">Read more</NuxtLink>
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
    required: true  
  }
})
</script>

<style scoped>
  div {
    border: 1px solid #fff;
    padding: 1rem;
    color: #fff;
    flex-grow: 1;
    flex: 33.3%;
    min-height: 200px;
    border-radius: 10px;
  }

  a {
    margin-top: auto;
  }

  p {
    max-height: 75px;
    overflow: hidden;
    margin: 1rem 0;
  }

  h3 {
    padding-bottom: 1rem;
    border-bottom: 1px solid #fff;
  }

  a {
    color: #fff;
  }
</style>
