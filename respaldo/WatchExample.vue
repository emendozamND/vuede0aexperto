<!-- src/components/WatchExample.vue -->
<template>
  <section>
    <h2>watch y watchEffect</h2>

    <label>
      Nombre:
      <input v-model="name" />
    </label>

    <p>Nombre actual: {{ name }}</p>
    <p>Nombre anterior (guardado por watch): {{ previousName }}</p>

    <hr />

    <label>
      Número:
      <input type="number" v-model.number="number" />
    </label>

    <p>number: {{ number }}</p>
    <p>doble (computed mental de watchEffect): {{ doubleFromEffect }}</p>
  </section>
</template>

<script setup>
import { ref, watch, watchEffect } from 'vue'

const name = ref('Elías')
const previousName = ref('')

watch(
  () => name.value,
  (newVal, oldVal) => {
    previousName.value = oldVal
  }
)

const number = ref(1)
const doubleFromEffect = ref(2)

watchEffect(() => {
  doubleFromEffect.value = number.value * 2
})
</script>
