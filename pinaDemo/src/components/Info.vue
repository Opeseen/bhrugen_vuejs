<template>
  <div class="text-center">Info</div>
  <p class="text-center">This is an info page</p>
  <p class="text-center">This is a simple game where you can increment, decrement or randomize the score. 
    The store starts at 50 and you can win by reaching {{ gameStore.getWinningScore }}
  </p>
  <input class="" type="text" v-model="gameStore.maxHealth">
</template>

<script setup>
  import {useGameStore} from "../stores/gameStore";
  const gameStore = useGameStore();
</script>