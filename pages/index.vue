<template>
  <div>    <div class="hero-card">
      <div class="hero-content">
        <div class="profile-image-container">
          <div class="profile-image"></div>
        </div>
        <div class="hero-text">
          <h1>Welkom op mijn portfolio website!</h1>
          <p class="tagline">Student CMD & Front-end Developer</p>
          <div class="hero-buttons">
            <NuxtLink to="/about" class="hero-btn primary">About Me</NuxtLink>
            <NuxtLink to="/contact" class="hero-btn secondary">Contact</NuxtLink>
          </div>
        </div>
      </div>
    </div>
      <h2>Featured Blogs</h2>
    <div class="featured-blogs">
      <BlogCard 
        v-for="blog in featuredBlogs" 
        :key="blog.id"
        :id="blog.id"
        :title="blog.title"
        :excerpt="blog.excerpt"
      />
    </div>

  </div>
</template>

<script setup>
const featuredBlogs = [
  {
    id: 1,
    title: "The Rise of AI in Modern Development",
    excerpt: "How artificial intelligence is changing the landscape of software development and what it means for developers."
  },
  {
    id: 2,
    title: "Understanding Web Components",
    excerpt: "A deep dive into web components and how they're shaping the future of web development."
  }
]
</script>
