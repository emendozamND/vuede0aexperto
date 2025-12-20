<script setup>
import { useCounterStore } from '@/stores/counter';
 const counterStore = useCounterStore();
</script>

<template>
    <div>
        <button @click="counterStore.decrement">-</button>
        <span>
            {{ counterStore.count }}
        </span>
        <button @click="counterStore.increment">+</button>
    </div>


</template>

<style scoped>

</style>