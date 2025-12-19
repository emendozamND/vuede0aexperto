<script setup>
import { useRoute } from "vue-router";

const route = useRoute();
console.log(route.params.courseId);
</script>

<template>
  <div>
    <h1>Course {{ route.params.courseId }}</h1>
  </div>
</template>