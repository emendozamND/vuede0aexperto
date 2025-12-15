<script setup>
  import {ref} from 'vue';
  const name = ref('');
  const numero = ref(1);
  const paises = ref([]);
  const cities = ref('');

</script>

<template>
 <p><textarea name="" id="" v-model="name"></textarea>  </p>
 {{ name }}
 <div>

  <input type = "checkbox" v-model="isChecked" />
  {{ isChecked  ? 'Checked' : 'unchecked' }} 
 <p> <input v-model="numero" type="radio" value = 1 name="numero" />
  Uno </p>
  <p> <input v-model="numero" type="radio"  value = 2 name="numero"/>
  Dos </p>
   <p> <input v-model="numero" type="radio" value = 3 name="numero"/>
  Tres </p>

{{ numero }}
 </div>
 <div>

  
  {{ isChecked  ? 'Checked' : 'unchecked' }} 
 <p> <input v-model="paises" type="checkbox" value = "chile" name="paises[]" />
  Chile</p>
  <p> <input v-model="paises" type="checkbox"  value = "argentina" name="paises[]"/>
  Argentina </p>
   <p> <input v-model="paises" type="checkbox" value = "méxico" name="paises[]"/>
  México </p>

{{ paises }}
<p>
<select v-model="cities">
  <option value="">Señeccione una Ciudad</option>
  <option value="New York">New York</option>
  <option value="Mexico city">Mexico city</option>
  <option value="Otawa">Otawa</option>
  </select>
  </p>
 </div>
<p>{{ cities }}</p>
 
</template>
<style scoped>

</style>