<template>
  <div class="bg text pt-3" :style="{height: '100vh'}">
    <h1 class="text-center text-success">ContactOpedia</h1>
    <div class="container">
      <button class="btn btn-primary text-black m-2" @click="newVersion=!newVersion">
        Toggle Component
      </button>
      <br/>
      <button class="btn btn-primary text-black m-2" @click="newVersion=false">Lucky Number V1</button>
      <button class="btn btn-primary text-black m-2" @click="newVersion=true">Lucky Number V2</button>
      <br><br>
      <KeepAlive :include="['LuckyNumber', 'LuckyNumberV2']">
        <component :is="currentComponent"/>
      </KeepAlive>
    </div>
  </div>
</template>

<script setup>
  import {ref, reactive, computed } from 'vue';
  import LuckyNumber from "./LuckyNumber.vue";
  import LuckyNumberV2 from "./LuckyNumberV2.vue";

  const newVersion = ref(true);
  const currentComponent = computed(()=> {
    return newVersion.value ? LuckyNumberV2 : LuckyNumber;
  });
</script>

<style></style>