<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="text-center pt-3 text-success h3">ContactOPedia</div>
    <div class="row">
      <div class="col-4 offset-1">
        <RouterLink to="/" class="form-control badge rounded-pill text-bg-warning p-4">Home</RouterLink>
      </div>
      <div class="col-4 offset-1">
        <RouterLink to="/info" class="form-control badge rounded-pill text-bg-warning p-4">Info</RouterLink>
      </div>
    </div>
  </header>
  <RouterView />
</template>