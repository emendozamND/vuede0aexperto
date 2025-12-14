<!-- src/components/PropsEmitsExampleChild.vue -->
<template>
  <div style="border: 1px solid #ccc; padding: 0.75rem; margin-top: 0.5rem;">
    <h3>Hijo</h3>
    <p>Mensaje recibido por <strong>prop</strong>:</p>
    <p>{{ message }}</p>

    <label>
      Cambiar mensaje (emit al padre):
      <input v-model="localMessage" />
    </label>

    <button @click="emitUpdate">
      Enviar mensaje al padre
    </button>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'

const props = defineProps({
  message: {
    type: String,
    required: true,
  },
})

const emit = defineEmits(['update-message'])

const localMessage = ref(props.message)

watch(
  () => props.message,
  (newVal) => {
    localMessage.value = newVal
  }
)

const emitUpdate = () => {
  emit('update-message', localMessage.value)
}
</script>
