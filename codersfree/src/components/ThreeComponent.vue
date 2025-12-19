<script setup>
import { inject,ref } from "vue";

const nombre = inject("nombre",ref("")); // debe coincidir EXACTO con provide("nombre", ...)
</script>

<template>
  <div class="bg-yellow-500 p-8">
    <p class="text-2xl">Hola desde el componente 3</p>

    
    <p class="text-xl">{{ nombre }}</p>
  </div>
</template>

<style scoped>
</style>