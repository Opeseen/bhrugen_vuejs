<template>
  <div class="container p-4">
    <div>
      <h1 class="text-success text-center" >RequestOpedia</h1>
      <hr>
      <table class="table table-striped table-light">
        <thead>
          <tr>
            <th>Name</th>
            <th>Days</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-light" v-for="element in destinationObj.destination" :key="element.id">
            <td>{{ element.name }}</td>
            <td>{{ element.days }}</td>
            <td>{{ element.price }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script setup>
  import axios from 'axios';
  import {reactive, onMounted} from 'vue';
  const destinationObj = reactive({
    destination: [],
  });
  onMounted( () => {
    loadDestination();
  });

  function loadDestination(){
    axios.get("http://localhost:3000/destination")
    .then((response) => {
      destinationObj.destination = response.data;
    });
  };
</script>