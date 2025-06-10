<template>
    <div class="container p-4 col-6">
    <div>
      <table class="table table-striped table-light">
        <thead>
          <tr>
            <th>Name</th>
            <th>Funfact</th>
            <th>Days</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <tr class="table-light" v-for="element in destinationObj.destination" :key="element.id">
            <td>{{ element.name }}</td>
            <td>{{ element.funFact }}</td>
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
  // create an empty array to store axios response data
  const destinationObj = reactive({
    destination: [],
  });
  // call this function only when the template has been rendered
  onMounted( () => {
    loadDestination();
  });

  // axios function api request to get data
  function loadDestination(){
    axios.get("http://localhost:3000/destination")
    .then((response) => {
      destinationObj.destination = response.data;
    })
    .catch((error) => {
      console.error("Error fetching data:");
    });
  };
</script>