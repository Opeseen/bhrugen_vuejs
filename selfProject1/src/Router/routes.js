import { createRouter, createWebHistory } from "vue-router";
import Home from "../components/Layout/Home.vue";
import EmployeeList from "../components/Employee/EmployeeList.vue";
import AddEmployee from "../components/Employee/AddEmployee.vue";
import NotFound from "../components/Layout/NotFound.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/",  component: Home, name:"home"},
    {path: "/employee", component: EmployeeList, name: "employee"},
    {path: "/employee/create", component: AddEmployee, name: "addEmployee"},
    {path: "/:catchAll(.*)", component: NotFound}
  ],
})

export default router;