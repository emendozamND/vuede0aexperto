<template>
  <section>
    <h2>Composition API</h2>
    <p>Contador: {{ counter }}</p>
    <button @click="increment">Incrementar</button>
  </section>
</template>

<script setup>
import { ref } from 'vue'

// estado reactivo con ref
const counter = ref(0)

// función normal que usa el estado
const increment = () => {
  counter.value++
}
</script>
