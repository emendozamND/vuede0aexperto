<template>
  <section>
    <h2>Sintaxis de plantilla</h2>

    <!-- Interpolación -->
    <p>Mensaje: {{ message }}</p>

    <!-- Expresión simple -->
    <p>En mayúsculas: {{ message.toUpperCase() }}</p>

    <!-- v-bind -->
    <p :title="tooltip">Pasa el mouse por aquí (title con v-bind).</p>

    <!-- v-if / v-else -->
    <p v-if="isLoggedIn">Estás logueado ✅</p>
    <p v-else>No estás logueado ❌</p>

    <!-- v-for -->
    <ul>
      <li v-for="(item, index) in items" :key="index">
        {{ index }} - {{ item }}
      </li>
    </ul>

    <!-- v-on / @ -->
    <button @click="toggleLogin">
      {{ isLoggedIn ? 'Cerrar sesión' : 'Iniciar sesión' }}
    </button>
  </section>
</template>

<script setup>
import { ref } from 'vue'

const message = ref('Hola desde Vue')
const tooltip = ref('Este texto viene de v-bind:title')
const isLoggedIn = ref(false)
const items = ref(['Vue', 'React', 'Angular'])

const toggleLogin = () => {
  isLoggedIn.value = !isLoggedIn.value
}
</script>
