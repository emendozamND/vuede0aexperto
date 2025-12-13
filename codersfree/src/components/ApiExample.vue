<template>
  <section>
    <h2>Consumo de API (fetch)</h2>

    <button @click="loadPosts" :disabled="loading">
      {{ loading ? 'Cargando...' : 'Volver a cargar' }}
    </button>

    <p v-if="error" style="color: red; margin-top: 0.5rem;">
      {{ error }}
    </p>

    <ul v-if="posts.length" style="margin-top: 0.75rem;">
      <li v-for="post in posts" :key="post.id">
        <strong>{{ post.id }} – {{ post.title }}</strong>
        <p>{{ post.body }}</p>
      </li>
    </ul>

    <p v-else-if="!loading && !error" style="margin-top: 0.75rem;">
      No hay datos aún, da clic en “Volver a cargar”.
    </p>
  </section>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { getPosts } from '../services/apiClient'

const posts = ref([])
const loading = ref(false)
const error = ref('')

const loadPosts = async () => {
  loading.value = true
  error.value = ''
  posts.value = []

  try {
    const data = await getPosts()
    posts.value = data
  } catch (err) {
    error.value = err.message || 'Error al cargar datos'
  } finally {
    loading.value = false
  }
}

// Cargar automáticamente al montar el componente
onMounted(loadPosts)
</script>
