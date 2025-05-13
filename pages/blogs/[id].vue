<template>
  <div>
    <div v-if="pending" class="loading">Loading blog post...</div>
    <div v-else-if="error" class="error">
      <h1>Error</h1>
      <p>{{ error.message }}</p>
      <NuxtLink to="/blogs">Back to Blogs</NuxtLink>
    </div>
    <div v-else class="blog-post">
      <h1>{{ blog.title }}</h1>
      <div class="blog-meta">
        <span>Posted: {{ formatDate(blog.created_at) }}</span>
      </div>
      <div class="blog-content">
        <ContentRenderer :value="parsedContent" />
      </div>
      <NuxtLink to="/blogs" class="back-link">Back to Blogs</NuxtLink>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { parse } from 'marked'

const route = useRoute()

// Fetch the blog post from the API
const { data: blog, error, pending } = await useFetch(`/api/blogs/${route.params.id}`)

// Parse markdown content
const parsedContent = computed(() => {
  if (!blog.value) return null
  
  let parsedBody;
  try {
    parsedBody = parse(blog.value.content);
  } catch (error) {
    console.error('Error parsing markdown:', error);
    parsedBody = `<div class="error-parsing">
      <p>Error parsing markdown content. Please make sure the marked library is installed:</p>
      <pre>npm install marked</pre>
    </div>`;
  }
  
  return {
    _type: 'markdown',
    body: parsedBody
  }
})

// Format date
function formatDate(dateString) {
  return new Date(dateString).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  })
}
</script>

<style scoped>
/* Styles moved to app.css */
</style>
