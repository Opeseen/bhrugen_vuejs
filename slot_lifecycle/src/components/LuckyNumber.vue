<template>
  <div class="col-3 bg-white text-center p-6">
    <button class="btn btn-danger text-black" @click="generateLuckyNumber()">
      <span v-if="luckyNumber === 0">
        Generate Lucky Number <br/> Range(1- 100)
      </span>
      <span v-else>Lucky Number: {{ luckyNumber }} <br/>
        Click to generate new lucky number
      </span>
    </button>
  </div>
</template>

<script setup>
  import {ref, inject} from 'vue';
  let luckyNumber = ref(0);

  function generateLuckyNumber(){
    luckyNumber.value = Math.floor(Math.random() * 100);
  };
</script>