<template>
  <div>
    <h1>Product List</h1>
    <p>Here is the list of products</p>
    <div v-for="product in products">
      <router-link :to="{name:'productDetails', params:{id: product.id, categoryId: 77}}"> 
        {{ product.name }} 
      </router-link>
    </div>
    <br>
    <button @click="$router.go(-1)" type="button" class="btn btn-success">Back</button>
  </div>
</template>

<script setup>
  const products = [
    {id: 1, name: "product 1"},
    {id: 2, name: "product 2"},
    {id: 3, name: "product 3"},
  ];
</script>