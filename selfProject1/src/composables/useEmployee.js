import { ref } from "vue";

const eid = ref(null);

export function useEmployee(){
  const setEmployeeId = (employeeId) => {
    eid.value = employeeId || null;
  };

  const getEmployeeId = () => {
    return eid.value;
  };

  const clearEmployeeId = () => {
    eid.value = null;
  };

  return {eid, setEmployeeId, getEmployeeId, clearEmployeeId};
}