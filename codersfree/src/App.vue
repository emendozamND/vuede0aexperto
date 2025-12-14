<script setup>
import { ref } from "vue";

const type = ref("a");
const mostrar = ref(true);
</script>
<script setup>
import { ref, computed } from "vue";

const type = ref("a");
const mostrar = ref(true);

const titulo = computed(() => {
  if (type.value === "a") return "A";
  if (type.value === "b") return "B";
  if (type.value === "c") return "C";
  return "Selecciona A, B o C";
});
</script>

<template>
  <button @click="type = 'a'">A</button>
  <button @click="type = 'b'">B</button>
  <button @click="type = 'c'">C</button>
  <button @click="mostrar = !mostrar">Mostrar</button>

  <h1>{{ titulo }}</h1>

  <div v-if="mostrar">
    <h1>Hola Mundo</h1>
    <h2>parrafo 2</h2>
    <h3>parrafo 3</h3>
  </div>
  <div v-else>
    <p>Está oculto</p>
  </div>
</template>

