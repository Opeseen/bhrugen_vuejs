<template>
  <header class="bg-blue-600 text-white shallow-md py-4 h-20">
    <div class="container mx-auto flex justify-between items-center px-4">
      <h3 class="font-bold text-2xl">Payroll System</h3>
      <nav>
        <ul class="flex space-x-6 px-6 py-3">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Employee</a>
          </li>
          <li>
            <a href="#">Paygroup</a>
          </li>
          <li type="button" class="bg-blue-400 w-30 text-center rounded-full cursor-pointer">
            Log in
          </li>
          <li type="button" class="bg-blue-400 w-30 text-center rounded-full cursor-pointer">
            Sign Up
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>
