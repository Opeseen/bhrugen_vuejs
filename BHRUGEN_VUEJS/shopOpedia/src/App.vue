<template>
  <div class="d-flex flex-column min-vh-100">
    <Header />
    <div class="flex-grow-1">
      <RouterView />
    </div>
    <Footer />
  </div>
</template>

<script setup>
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
</script>

<style scoped></style>
