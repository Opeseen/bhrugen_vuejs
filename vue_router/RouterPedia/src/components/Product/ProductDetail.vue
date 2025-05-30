<template>
  <div>
    <h1>Product Details</h1>
    <p>Product ID: {{ route.params.id }}</p>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  const route = useRoute();
  console.log("route params is ",route.params)
</script>