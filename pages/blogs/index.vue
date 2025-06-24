<template>
  <main>
    <h1>Blogs</h1>
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
  </main>
</template>

<script setup>
  const { data: blogs, error, pending } = await useFetch('/api/blogs')
</script>

<style scoped>
  main {
    max-width: 1200px;
    margin: 0 auto;
    padding: 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  h1 {
    font-size: 4rem;
    color: #fff;
    margin-bottom: 1rem;
  }

  .blogs-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1rem;
    padding-bottom: 6rem;
  }
</style>
