<script setup>
import { ref } from "vue";
import DetailCourse from "./components/DetailCourse.vue";

const courses = [
  { title: "Vue desde cero", professor: "Victor Arana", price: 10, description: "Aprende Vue desde cero y crea aplicaciones" },
  { title: "Angular desde cero", professor: "Victor Arana", price: 10, description: "Aprende Angular desde cero y crea aplicaciones" },
  { title: "React desde cero", professor: "Victor Arana", price: 10, description: "Aprende React desde cero y crea aplicaciones" }
];

const count = ref(5);
function decrementCount(n){
  count.value -= n;
}

const decrement = () => {
  if (count.value > 0) count.value--;
};
</script>

<template>
  <input type="text" v-model.number="count" />

  <DetailCourse
    :courses="courses"
    :count="count"
    @decrement-count="decrementCount"
  />
</template>
