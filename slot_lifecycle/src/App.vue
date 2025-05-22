<template>
  <h1>Hello vue</h1>
  <LuckyNumberParentComponent>
    <p class="pt-2">We have two versions for picking lucky number</p>
    <template v-slot:moreInfo>
      <p>Click the button to toggle between the two version</p>
    </template>  
    <template v-slot:learnSlot>
      <button @click="showMessage">What we will learn</button>
      <h4 class="text-success">{{ message }}</h4>
    </template>

    <hr>
  </LuckyNumberParentComponent>
</template>

<script setup>
  import LuckyNumberParentComponent from './components/LuckyNumberParentComponent.vue';
  import {ref} from 'vue';
  const message = ref("");
  function showMessage(){
    message.value = "We will learn how to use slots";
  }
</script>