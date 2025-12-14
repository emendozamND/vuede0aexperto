<script setup>
import { ref } from "vue";

const type = ref("a");
const mostrar = ref(true);
</script>

<template>
  <button @click="type = 'a'">A</button>
  <button @click="type = 'b'">B</button>
  <button @click="type = 'c'">C</button>
  <button @click="mostrar = !mostrar">Mostrar</button>

  <!-- Cadena IF -->
  <h1 v-if="type === 'a'">A</h1>
  <h2 v-else-if="type === 'b'">B</h2>
  <h3 v-else-if="type === 'c'">C</h3>
  <p v-else>No es A, B ni C</p>

  <!-- Otro IF independiente -->
  <div v-if="mostrar">
    <h1>Hola Mundo</h1>
    <h2>parrafo 2</h2>
    <h3>parrafo 3</h3>
  </div>
  <div v-else>
    <p>is hide</p>
  </div>
</template>
