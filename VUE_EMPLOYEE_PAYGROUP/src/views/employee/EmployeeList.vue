<template>
  <h1 className="text-3xl text-center text-blue-600 mt-2">Employee Record</h1>
  <section class="p-3 mt-1 sm:p-5">
    <div v-if="loading" class="flex justify-center items-center">
      <Loader />
    </div>
    <div class="bg-gray-100 mt-4 max-w-7xl mx-auto p-4">
      <div class="relative shadow-md sm:rounded-lg overflow-hidden">
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
            <RouterLink :to="{name: APP_ROUTE_NAMES.ADD_EMPLOYEE}" class="flex items-center justify-center text-white bg-blue-400 hover:bg-blue-700 font-medium rounded-lg text-sm px-4 py-2">
              <svg class="h-3.5 w-3.5 mr-2 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                <path d="M16 0H4a2 2 0 0 0-2 2v1H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v2H1a1 1 0 0 0 0 2h1v1a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4.5a3 3 0 1 1 0 6 3 3 0 0 1 0-6ZM13.929 17H7.071a.5.5 0 0 1-.5-.5 3.935 3.935 0 1 1 7.858 0 .5.5 0 0 1-.5.5Z"/>
              </svg>
              Add Employee
            </RouterLink>
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
          <table class="w-full text-sm text-left">
              <thead class="text-xs  uppercase bg-gray-100 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" class="p-4">
                    <div class="flex items-center">
                      <input id="checkbox-all-search" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600">
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
                <tr class="hover:bg-gray-50 cursor-pointer" @click="handleEmployeeClick(employee.id)" 
                v-for="employee in employeeList.employees" :key="employee.id">
                  <td class="w-4 p-4">
                    <div class="flex items-center">
                      <input id="" type="checkbox" class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded-sm focus:ring-blue-500 dark:focus:ring-blue-600" @click.stop>
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
  import {ref, reactive, onMounted} from 'vue';
  import { RouterLink, useRouter } from 'vue-router'
  import employeeService from '../../services/employeeService';
  import { APP_ROUTE_NAMES } from '../../constants/routeNames';

  const router = useRouter();
  const loading = ref(false);
  // create an empty array to store api response data
  const employeeList = reactive({
    employees: [],
  });
  // call this function only when the template has been rendered
  onMounted(() => {
    loadEmployees();
  });

  async function loadEmployees(){
    try{
      loading.value = true;
      const response = await employeeService.getEmployees();
      employeeList.employees = response.data;
    }catch (error) {
      console.error('Error fetching employee data:', error);
    }finally{
      loading.value = false;
    }
  };

  function handleEmployeeClick(employeeId){
    router.push({
      name: APP_ROUTE_NAMES.EMPLOYEE_DETAILS,
      params: { id: employeeId },
    });
  };
</script>