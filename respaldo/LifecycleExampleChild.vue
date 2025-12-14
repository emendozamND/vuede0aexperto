<!-- src/components/LifecycleExampleChild.vue -->
<template>
  <div style="border: 1px solid #aaa; padding: 0.75rem; margin-top: 0.5rem;">
    <h3>Hijo con hooks de ciclo de vida</h3>
    <p>Mira la consola del navegador para ver los logs.</p>
  </div>
</template>

<script setup>
import {
  onBeforeMount,
  onMounted,
  onBeforeUpdate,
  onUpdated,
  onBeforeUnmount,
  onUnmounted,
} from 'vue'

onBeforeMount(() => {
  console.log('[Child] onBeforeMount')
})

onMounted(() => {
  console.log('[Child] onMounted')
})

onBeforeUpdate(() => {
  console.log('[Child] onBeforeUpdate')
})

onUpdated(() => {
  console.log('[Child] onUpdated')
})

onBeforeUnmount(() => {
  console.log('[Child] onBeforeUnmount')
})

onUnmounted(() => {
  console.log('[Child] onUnmounted')
})
</script>
