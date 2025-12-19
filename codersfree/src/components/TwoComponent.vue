<script setup>
import ThreeComponent from "./ThreeComponent.vue";
import { inject, ref } from "vue";   

const nombre = inject("nombre", ref("")); 
</script>

<template>
  <div class="bg-blue-500 p-8">
    <p class="text-2xl">Hola desde el componente 2</p>

    <p>{{ nombre.value }}</p>

    <ThreeComponent />
  </div>
</template>

<style scoped>
</style>