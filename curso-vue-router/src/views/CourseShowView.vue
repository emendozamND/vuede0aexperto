<script setup>
import { useRoute } from "vue-router";
import { computed } from "vue";

const route = useRoute();

const courses = computed(() => String(route.params.courses ?? ""));

// Opcional: para verificar
console.log("params:", route.params);
</script>

<template>
  <div class="about">
    <h1>Esta es la página de Cursos</h1>
    <h2>Bienvenido al curso: {{ courses }}</h2>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
