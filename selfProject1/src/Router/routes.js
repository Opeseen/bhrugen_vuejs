import { createRouter, createWebHistory } from "vue-router";
import { APP_ROUTE_NAMES } from "../constants/routeNames";
import NotFound from "../components/Layout/NotFound.vue";
import Home from "../views/home/Home.vue";
import EmployeeList from "../views/employee/EmployeeList.vue";
import AddEmployee from "../views/employee/AddEmployee.vue";
import EmployeeDetails from "../views/employee/EmployeeDetails.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/",  component: Home, name:APP_ROUTE_NAMES.HOME},
    {path: "/employees", component: EmployeeList, name: APP_ROUTE_NAMES.LIST_EMPLOYEE},
    {path: "/employee/create", component: AddEmployee, name: APP_ROUTE_NAMES.ADD_EMPLOYEE},
    {path: "/employee/:id", component: EmployeeDetails, name: APP_ROUTE_NAMES.EMPLOYEE_DETAILS},
    {path: "/:catchAll(.*)", component: NotFound}
  ],
})

export default router;