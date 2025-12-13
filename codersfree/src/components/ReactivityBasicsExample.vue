<template>
  <section>
    <h2>Fundamentos de reactividad</h2>

    <h3>ref (para valores simples)</h3>
    <p>Contador: {{ counter }}</p>
    <button @click="counter++">+1</button>

    <h3>reactive (para objetos)</h3>
    <p>Nombre: {{ user.name }}</p>
    <p>Edad: {{ user.age }}</p>
    <button @click="user.age++">Aumentar edad</button>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

// ref: envuelve un valor primitivo
const counter = ref(0)

// reactive: convierte un objeto completo en reactivo
const user = reactive({
  name: 'Elías',
  age: 30,
})
</script>
