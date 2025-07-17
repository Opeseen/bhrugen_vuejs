<template>
  <h1 className="text-3xl text-center text-blue-600 mt-2">Add Employee</h1>
  <form @submit.prevent="submitEmployeeData">
    <div class="max-w-4xl mx-auto p-4 rounded-lg shadow bg-gray-100">
      <div class="mt-2 grid grid-cols-1 gap-x-6 gap-y-6 sm:grid-cols-6">
        <div class="sm:col-span-2">
          <span class="block text-sm/6 font-medium text-gray-900">First name</span>
          <div class="mt-2">
            <input type="text"
            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" v-model="employeeData.firstName" />
          </div>
        </div>

        <div class="sm:col-span-2">
          <span  class="block text-sm/6 font-medium text-gray-900">Last name</span>
          <div class="mt-2">
            <input type="text"
            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" v-model="employeeData.lastName" />
          </div>
        </div>

        <div class="sm:col-span-2">
          <span class="block text-sm/6 font-medium text-gray-900">Email</span>
          <div class="mt-2">
            <input type="text" 
            class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" v-model="employeeData.email" />
          </div>
        </div>          
        
        <div class="sm:col-span-2">
          <span class="block text-sm/6 font-medium text-gray-900">Address</span>
          <div class="mt-2">
            <input type="text" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"  v-model="employeeData.address"/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <span class="block text-sm/6 font-medium text-gray-900">Phone</span>
          <div class="mt-2">
            <input type="text" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" v-model="employeeData.phone"/>
          </div>
        </div>

        <div class="sm:col-span-2">
          <span class="block text-sm/6 font-medium text-gray-900">State</span>
          <div class="mt-2">
            <input type="text" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" v-model="employeeData.state"/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <span class="block text-sm/6 font-medium text-gray-900">City</span>
          <div class="mt-2">
            <input type="text" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" v-model="employeeData.city"/>
          </div>
        </div>

        <div class="sm:col-span-3">
          <span class="block text-sm/6 font-medium text-gray-900">Nationality</span>
          <div class="mt-2">
            <input type="text" class="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6" v-model="employeeData.nationality"/>
          </div>
        </div>
      </div>

      <div class="mt-8">
        <!-- <button type="Submit" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Submit</button> -->
        <FwbButton type="submit" class="w-30  bg-blue-400" :disabled="loading">
          <template #prefix v-if="loading">
            <fwb-spinner color="gray"/>
          </template>
          Submit
        </FwbButton>
      </div>
    </div>
  </form>
</template>

<script setup>
  import {reactive, ref} from 'vue';
  import employeeService from '../../services/employeeService';
  import { FwbButton, FwbSpinner  } from 'flowbite-vue';

  const loading = ref(false);
  const employeeData = reactive({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    phone: '',
    state: '',
    city: '',
    nationality: ''
  });

  // Function to handle form submission
async function submitEmployeeData() {  
  try {
    loading.value = true;
    await employeeService.createEmployee(employeeData);
    // Reset form on success
    Object.keys(employeeData).forEach(key => employeeData[key] = '');

  } catch (error) {
    console.error('Error submitting employee data:', error);
  }finally{
    loading.value = false;
  }
}
</script>
<style>
</style>