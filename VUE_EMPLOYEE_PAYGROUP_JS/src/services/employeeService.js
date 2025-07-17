  import axios from 'axios';

  export default {
    async createEmployee(employeeData){
      await axios.post('http://localhost:3000/employees', {
        id: Date.now().toString(),
        ...employeeData
      });
    },

    async getEmployees(){
      const response = await axios.get("http://localhost:3000/employees");
      return response;
    },

    async getEmployeeById(employeeId){
      const response = await axios.get(`http://localhost:3000/employees/${employeeId}`);
      return response;
    }
  };