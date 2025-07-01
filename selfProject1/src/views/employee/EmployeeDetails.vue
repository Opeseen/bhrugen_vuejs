<template>
  <div v-if="loading" class="flex justify-center items-center">
    <loader />
  </div>
  <div v-else-if="employeeData.id" class="p-4 text-center">
    <h1 class="text-2xl font-bold text-blue-700">Employee Detail</h1>
    <p class="mt-2 text-gray-700">Viewing details for employee with ID: {{ employeeData.id }}</p>
    You can now fetch employee details using this ID
  </div>
  <div v-else class="flex justify-center items-center">
    No record found
  </div>
</template>

<script setup>
  import { onMounted, ref, reactive } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import employeeService from '../../services/employeeService';

  const route = useRoute();
  const employeeData = reactive({
    id: "",
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    phone: "",
    state: "",
    city: "",
    nationality: ""
  });
  const loading = ref(false);
  const employeeId = route.params.id;
  onMounted( ()=> {
    getEmployee();
  });

  async function getEmployee(){
    if(!employeeId) return;
    try {
      loading.value = true;
      const response = await employeeService.getEmployeeById(employeeId);
      Object.assign(employeeData, {...response.data} )
    } catch (error) {
      console.error(error)
    }finally{
      loading.value = false;
    }
  };

</script>