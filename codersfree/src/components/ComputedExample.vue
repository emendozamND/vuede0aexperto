<template>
  <section>
    <h2>Propiedades calculadas (computed)</h2>

    <label>
      Escribe tu nombre:
      <input v-model="name" />
    </label>

    <p>Nombre original: {{ name }}</p>
    <p>Nombre en mayúsculas (computed): {{ upperName }}</p>

    <label>
      Número:
      <input type="number" v-model.number="number" />
    </label>

    <p>Número original: {{ number }}</p>
    <p>Doble (computed): {{ doubleNumber }}</p>
  </section>
</template>

<script setup>
import { ref, computed } from 'vue'

const name = ref('Elías')
const number = ref(5)

// computed: se recalcula solo cuando sus dependencias cambian
const upperName = computed(() => name.value.toUpperCase())
const doubleNumber = computed(() => number.value * 2)
</script>
