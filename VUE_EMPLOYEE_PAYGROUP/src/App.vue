<template>
  <div class="min-h-screen flex flex-col">
    <!-- header content -->
    <Header />
    <!-- main page content -->
    <main class="flex-grow">
      <RouterView></RouterView>
    </main>
    <!-- footer content -->
    <Footer />
  </div>
</template>

<script setup>
import { RouterView } from "vue-router";
import Header from "./components/Layout/Header.vue";
import Footer from "./components/Layout/Footer.vue";
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300;400;600;700&display=swap");
</style>
