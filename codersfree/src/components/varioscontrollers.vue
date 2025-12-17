<script setup>
import { ref } from "vue";

const name = ref("");
const isChecked = ref(false);

const numero = ref(1);
const paises = ref([]);
const cities = ref("");
const valor = ref(0);

const enviar = () => {
  console.log(valor.value + 7);
};
</script>

<template>
  <p>
    <textarea v-model.lazy="name"></textarea>
  </p>
  <p>{{ name }}</p>

  <div>
    <label>
      <input type="checkbox" v-model="isChecked" />
      {{ isChecked ? "Checked" : "unchecked" }}
    </label>

    <p><label><input v-model="numero" type="radio" :value="1" name="numero" /> Uno</label></p>
    <p><label><input v-model="numero" type="radio" :value="2" name="numero" /> Dos</label></p>
    <p><label><input v-model="numero" type="radio" :value="3" name="numero" /> Tres</label></p>

    <p>Radio seleccionado: {{ numero }}</p>
  </div>

  <div>
    <p><label><input v-model="paises" type="checkbox" value="chile" /> Chile</label></p>
    <p><label><input v-model="paises" type="checkbox" value="argentina" /> Argentina</label></p>
    <p><label><input v-model="paises" type="checkbox" value="méxico" /> México</label></p>

    <p>Países: {{ paises }}</p>

    <p>
      <select v-model="cities">
        <option value="">Seleccione una Ciudad</option>
        <option value="New York">New York</option>
        <option value="Mexico City">Mexico City</option>
        <option value="Ottawa">Ottawa</option>
      </select>
    </p>

    <p>Ciudad: {{ cities }}</p>
  </div>

  <input type="number" v-model.number="valor" />
  <button @click="enviar">Enviar</button>
</template>
