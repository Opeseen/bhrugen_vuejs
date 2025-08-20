<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <header>
    <div class="flex justify-between items-center">
      <RouterLink :to="{ name: 'home' }" class="p-4">
        <div
          class="font-bold bg-green-600 rounded-lg px-2 py-2 text-white transition duration-300 hover:scale-110 cursor-pointer"
        >
          N8N Learn
        </div>
      </RouterLink>
      <nav class="flex gap-6 p-4 font-semibold">
        <div :class="navButtonClass">Home</div>
        <div :class="navButtonClass">About</div>
        <div :class="navButtonClass">Contact</div>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
const navButtonClass =
  'bg-blue-600 px-2 py-2 rounded-lg text-white transition duration-300 hover:scale-110 cursor-pointer'
</script>
