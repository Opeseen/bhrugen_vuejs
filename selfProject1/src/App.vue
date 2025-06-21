<template>
  <Header />
  <RouterView></RouterView>
  <Footer />
</template>

<script setup>
  import { RouterView } from 'vue-router'
  import Header from './components/Layout/Header.vue';
  import Footer from './components/Layout/Footer.vue';
  import { onMounted } from 'vue'
  import { initFlowbite } from 'flowbite'
  // initialize components based on data attribute selectors
  onMounted(() => {
    initFlowbite();
  });
</script>

<style>
  @import url('https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&display=swap');
</style>