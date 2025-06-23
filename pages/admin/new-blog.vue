<template>
  <div class="admin-container">
    <h1>Admin - New Blog Post</h1>
    
    <div v-if="statusMessage" :class="`status-message ${statusType}`">
      {{ statusMessage }}
    </div>
    
    <form @submit.prevent="submitBlog" class="blog-form">
      <div class="form-group">
        <label for="title">Title:</label>
        <input 
          id="title"
          v-model="newBlog.title"
          type="text"
          required
          class="form-control"
        />
      </div>
      
      <div class="form-group">
        <label for="summary">Summary:</label>
        <textarea
          id="summary"
          v-model="newBlog.summary"
          required
          class="form-control"
          rows="3"
        ></textarea>
      </div>
      
      <div class="form-group">
        <label for="content">Content (Markdown):</label>
        <textarea
          id="content"
          v-model="newBlog.content"
          required
          class="form-control md-editor"
          rows="12"
        ></textarea>
      </div>
      
      <div class="form-actions">
        <button type="submit" class="btn-submit" :disabled="submitting">
          {{ submitting ? 'Saving...' : 'Save Blog Post' }}
        </button>
        <NuxtLink to="/blogs" class="btn-cancel">Cancel</NuxtLink>
      </div>
    </form>
  </div>
</template>

<script setup>
const newBlog = ref({
  title: '',
  summary: '',
  content: ''
})

const submitting = ref(false)
const statusMessage = ref('')
const statusType = ref('success')

async function submitBlog() {
  if (!newBlog.value.title || !newBlog.value.content) {
    statusMessage.value = 'Please fill out all required fields'
    statusType.value = 'error'
    return
  }
  
  submitting.value = true
  statusMessage.value = ''
  
  try {
    const response = await $fetch('/api/blogs', {
      method: 'POST',
      body: newBlog.value
    })
    
    // Reset form
    newBlog.value = {
      title: '',
      summary: '',
      content: ''
    }
    
    statusMessage.value = 'Blog post created successfully!'
    statusType.value = 'success'
    
    // Redirect to the blog post after a delay
    setTimeout(() => {
      navigateTo(`/blogs/${response.id}`)
    }, 1500)
  } catch (error) {
    console.error('Error creating blog post:', error)
    statusMessage.value = error.message || 'Error creating blog post'
    statusType.value = 'error'
  } finally {    submitting.value = false
  }
}
</script>
