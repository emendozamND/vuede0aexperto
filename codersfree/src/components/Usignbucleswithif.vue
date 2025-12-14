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
  <h3>Users (index > 1)</h3>
  <ul>
    <template v-for="(user, index) in users" :key="user">
      <li v-if="index > 1">
        {{ index }} - {{ user }}
      </li>
    </template>
  </ul>

  <h3>Customers (id > 1)</h3>
  <ul>
    <template v-for="customer in customers" :key="customer.id">
      <li v-if="customer.id > 1">
        {{ customer.id }} - {{ customer.name }}
      </li>
    </template>
  </ul>
</template>
