<template>
  <h1>Home Page</h1>
  <button @click="goToCOntact" type="button" class="btn btn-primary">Contact Us</button>
</template>

<script setup>
  import { useRouter } from 'vue-router';
import router from '../../Router/routes';
  function goToCOntact(){
    router.push({name: 'contact'}); // you can use named routes or direct routes
  };
</script>