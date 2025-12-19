<script setup>
import TwoComponent from "./TwoComponent.vue";
import { ref, provide } from "vue";

const nombre = ref("Elias Mendoza");
provide("nombre", nombre);
</script>

<template>
  <div class="bg-red-500 p-8">
    <p class="text-2xl">Hola desde el componente 1</p>

    <input type="text" v-model="nombre" />

    <TwoComponent />
  </div>
</template>

<style scoped>
</style>
