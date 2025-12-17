<script setup>
const props = defineProps({
  courses: { type: Array, required: true },
});

const count = defineModel({ 
  type: Number, 
  default: 0
});

function buttonClick() {
  if (count.value > 0) count.value--;
}
</script>

<template>
  <div>
    <div v-for="(c, i) in props.courses" :key="i">
      <h1>
        {{ c.title }}
        <input type="text" v-model.number="count" />
      </h1>
      <p>{{ c.professor }}</p>
      <p>{{ c.price }}</p>
      <p>{{ c.description }}</p>
    </div>

    <button @click="buttonClick">Hazme click</button>
  </div>
</template>
