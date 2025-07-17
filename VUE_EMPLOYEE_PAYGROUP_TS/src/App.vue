<template>
  <div class="flex flex-col min-h-screen">
    <Header />
    <main
      class="flex-grow flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600"
    >
      <Home />
    </main>
    <Footer />
  </div>
</template>

<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import Header from './components/layout/Header.vue'
import Footer from './components/layout/Footer.vue'
import Home from './views/home/Home.vue'
</script>

<style scoped></style>
