<script setup>
const isDisabled = true;
</script>
<template>
  <button :disabled="isDisabled" class="btn">
    HAZME CLICK
  </button>
</template>

<style scoped>
.btn{
  background: #222;
  color: white;
  padding: 10px 16px;
  border: none;
  border-radius: 8px;
  cursor: pointer;
}
.btn:disabled{
  opacity: 0.5;
  cursor: not-allowed;
}
</style>

