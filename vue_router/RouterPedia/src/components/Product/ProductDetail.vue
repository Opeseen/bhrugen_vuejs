<template>
  <div>
    <h1>Product Details</h1>
    <div v-if="route.params.id">
      <p>Product ID: {{ route.params.id }}</p>
    </div>
    <div v-else>
      <p>No product id found</p>
    </div>
    <div v-if="route.params.categoryId">
      <p>Category ID: {{ route.params.categoryId }}</p>
    </div>
  </div>
</template>

<script setup>
  import { useRoute } from 'vue-router';
  const route = useRoute();
</script>