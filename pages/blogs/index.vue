<template>
  <div>
    <h1>All Blogs</h1>
    <div v-if="pending" class="loading">
      Loading blog posts...
    </div>
    <div v-else-if="error" class="error">
      {{ error.message }}
    </div>
    <div v-else class="blogs-grid">
      <BlogCard 
        v-for="blog in blogs" 
        :key="blog.id"
        :id="blog.id"
        :title="blog.title"
        :excerpt="blog.summary"
      />
    </div>
  </div>
</template>

<script setup>
// Fetch blogs from API
const { data: blogs, error, pending } = await useFetch('/api/blogs')
</script>

<style scoped>
/* Styles moved to app.css */
</style>
