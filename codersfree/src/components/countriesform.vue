<script setup>
import { ref } from 'vue'

const paises = ref([
  "Francia",
  "Alemania",
  "Italia",
  "Japón",
  "China",
  "Australia"
]);

const name = ref('')

function save() {
  if (!name.value.trim()) return
  paises.value.push(name.value.trim())
  name.value = ''
}
</script>

<template>
  <div>
    <form @submit.prevent="save">
      <input type="text" v-model="name" />
      <button>Guardar</button>
    </form>

    <p>Nombre ingresado: {{ name }}</p>

    <h1>Paises</h1>
    <ul>
      <li v-for="(pais, index) in paises" :key="index">
        {{ index }} - {{ pais }}
      </li>
    </ul>
  </div>
</template>
