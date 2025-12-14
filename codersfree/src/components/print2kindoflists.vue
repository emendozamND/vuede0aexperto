<script setup>
const users = [
  "John Doe",
  "Jane Smith",
  "Alice Johnson",
  "bob Brown",
  "Charlie Black",
];

const customers = [
  { id: 1, name: "John Doe" },
  { id: 2, name: "Jane Smith" },
  { id: 3, name: "Alice Johnson" },
  { id: 4, name: "bob Brown" },
  { id: 5, name: "Charlie Black" },
];
</script>

<template>
  <h3>Users</h3>
  <ul>
    <li v-for="user in users" :key="user">
      {{ user }}
    </li>
  </ul>

  <h3>Customers</h3>
  <ul>
    <li v-for="customer in customers" :key="customer.id">
      {{ customer.id }} - {{ customer.name }}
    </li>
  </ul>

  <!-- Si quieres ver los arreglos completos -->
  <pre>{{ users }}</pre>
  <pre>{{ customers }}</pre>
</template>
