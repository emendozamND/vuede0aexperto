<!-- src/components/LifecycleExample.vue -->
<template>
  <section>
    <h2>Ciclos de vida (Lifecycle)</h2>

    <button @click="toggleChild">
      {{ showChild ? 'Destruir componente hijo' : 'Crear componente hijo' }}
    </button>

    <LifecycleChild v-if="showChild" />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import LifecycleChild from './LifecycleExampleChild.vue'

const showChild = ref(true)

const toggleChild = () => {
  showChild.value = !showChild.value
}
</script>
