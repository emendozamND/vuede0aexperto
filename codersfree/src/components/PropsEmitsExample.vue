<!-- src/components/PropsEmitsExample.vue -->
<template>
  <section>
    <h2>Props y Emits</h2>

    <p><strong>Mensaje en el padre:</strong> {{ parentMessage }}</p>

    <ChildMessage
      :message="parentMessage"
      @update-message="handleUpdateMessage"
    />
  </section>
</template>

<script setup>
import { ref } from 'vue'
import ChildMessage from './PropsEmitsExampleChild.vue'

const parentMessage = ref('Hola desde el padre')

const handleUpdateMessage = (newMessage) => {
  parentMessage.value = newMessage
}
</script>
