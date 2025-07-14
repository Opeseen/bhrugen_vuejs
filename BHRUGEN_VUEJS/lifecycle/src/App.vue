<template>
  <button @click="increment">Increment</button>
  <button @click="decrement">Decrement</button>
  <p>{{ count }}</p>
  <br><br>
  <buttonCounter />
</template>

<script setup>
  import { useCounter } from './composibles/useCounter';
  import buttonCounter from './components/buttonCounter.vue';
  const {count, increment, decrement} = useCounter(100, 10);
</script>