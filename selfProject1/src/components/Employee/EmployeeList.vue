<template>
  <h1 className="text-3xl text-center text-blue-600 mt-2">Employee Record</h1>
  <section class="p-3 mt-1 sm:p-5">
    <div v-if="employeeList.isLoading" class="flex justify-center items-center">
      <Loader />
    </div>
    <div class="bg-gray-100 mt-4 max-w-7xl mx-auto p-4">
      <div class="bg-white dark:bg-gray-500 relative shadow-md sm:rounded-lg overflow-hidden">
        <!-- Before table div -->
        <div class="flex flex-col md:flex-row items-center justify-between space-y-3 md:space-y-0 md:space-x-4 p-4">
          <div class="w-full md:w-1/2">
            <form class="flex items-center">
              <label for="simple-search" class="sr-only">Search</label>
              <div class="relative w-full">
                <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                  <svg aria-hidden="true" class="w-5 h-5 text-gray-500 dark:text-gray-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clip-rule="evenodd" />
                  </svg>
                </div>
                <input type="text" id="simple-search" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full pl-10 p-2 dark:bg-gray-700 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Search" required="">
              </div>
            </form>
          </div>
          <div class="w-full md:w-auto flex flex-col md:flex-row space-y-2 md:space-y-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
            <button type="button" class="flex items-center justify-center text-white bg-blue-400 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2">
              <svg class="h-3.5 w-3.5 mr-2" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                <path clip-rule="evenodd" fill-rule="evenodd" d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z" />
              </svg>
              Add Column
            </button>
          </div>
        </div>
        <!-- Employee Table starts here -->
        <div class="overflow-x-auto">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="p-4">
                    <div class="flex items-center">
                      <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">
                      <label for="checkbox-all-search" class="sr-only">checkbox</label>
                    </div>
                  </th>
                  <th scope="col" class="px-4 py-3">Firstname</th>
                  <th scope="col" class="px-4 py-3">Lastname</th>
                  <th scope="col" class="px-4 py-3">Email</th>
                  <th scope="col" class="px-4 py-3">Phone</th>
                </tr>
              </thead>
              <tbody>
                <tr class="border-b dark:border-gray-700 dark:text-white hover:bg-gray-50 dark:hover:bg-gray-600 cursor-pointer" @click="handleEmployeeClick(employee)" 
                v-for="employee in employeeList.employees" :key="employee.id">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input id="" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" @click.stop>
                      <label for="" class="sr-only">checkbox</label>
                    </div>
                  </td>
                  <td class="px-4 py-3">{{ employee.firstName }}</td>
                  <td class="px-4 py-3">{{ employee.lastName }}</td>
                  <td class="px-4 py-3">{{ employee.email }}</td>
                  <td class="px-4 py-3">{{ employee.phone }}</td>
                </tr>
              </tbody>
          </table>
        </div>  
      </div>
    </div>

  </section>
</template>

<script setup>
  import axios from 'axios';
  import {reactive, onMounted} from 'vue';
  // create an empty array to store axios response data
  const employeeList = reactive({
    employees: [],
    isLoading: false
  });
  // call this function only when the template has been rendered
  onMounted(() => {
    loadDestination();
  });

  // axios function api request to get data
  function loadDestination(){
    employeeList.isLoading = true;
    axios.get("http://localhost:3000/employees")
    .then((response) => {
      new Promise((resolve) => setTimeout(resolve, 500)).then(() => {
        employeeList.employees = response.data;
        employeeList.isLoading = false;
      });  
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
  };

  function handleEmployeeClick(employee){
    console.log("Employee id:", employee.id);
  };
</script>