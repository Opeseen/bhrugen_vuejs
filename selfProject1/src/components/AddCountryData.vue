<template>
  <div class="container border rounded-3 p-2 col-4">
    <h3 class="text-center text-primary fs-4">Add new data</h3>
    <form @submit.prevent="submitCountryData">
      <div class="input-group input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing">Name</span>
        <input type="text" class="form-control" v-model="countryData.name" >
      </div>
      <div class="input-group input-group mb-3">
        <span class="input-group-text" >Funfact</span>
        <input type="text" class="form-control" v-model="countryData.funFact">
      </div>
      <div class="input-group input-group mb-3">
        <span class="input-group-text" id="inputGroup-sizing-sm">Days</span>
        <input type="text" class="form-control" v-model="countryData.days" >
      </div>
      <div class="input-group input-group mb-3">
        <span class="input-group-text" >Price</span>
        <input type="text" class="form-control" v-model="countryData.price" >
      </div>

      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
  </div>
</template>

<script setup>
  import {reactive} from 'vue';
  import axios from 'axios';
  const countryData = reactive({
    name: '',
    days: '',
    funFact: '',
    price: '',
  });

  // Function to handle form submission
  async function submitCountryData() {
    try {
      const response = await axios.post('http://localhost:3000/destination', {
        id: Date.now().toString(), // Using current timestamp as a unique ID
        name: countryData.name,
        days: countryData.days,
        funFact: countryData.funFact,
        price: countryData.price
      });
    } catch (error) {
      console.error('Error submitting data:', error);
    }
    // Reset the form after submission
    countryData.name = '';
    countryData.days = '';
    countryData.funFact = '';
    countryData.price = '';
  }
</script>