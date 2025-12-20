import { defineStore } from "pinia";
import { computed, ref } from "vue";


export const useCounterStore = defineStore('counter', () => {
    const _count = ref(0);
    // getter (solo lectura)
    const count = computed(() => _count.value);

    // acciones (única forma de modificar)
    const increment = () => {
        _count.value++;
    };

    const decrement = () => {
        _count.value--;
    }
    return { count, increment, decrement };
});