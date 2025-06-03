import HomePage from "../components/Home/HomePage.vue";
import Contact from "../components/Home/Contact.vue";
import ProductList from "../components/Product/ProductList.vue";
import ProductDetail from "../components/Product/ProductDetail.vue";
import NotFound from "../components/Layout/NotFound.vue";
import NoAccess from "../components/Layout/NoAccess.vue";
import Login from "../components/Authentication/Login.vue";
import {createRouter, createWebHistory} from 'vue-router';

function isAdmin(){
  const isAdmin = true;
  if(isAdmin){
    return true;
  };
  return {name: "noaccess"};
};

function isAuthenticated(){
  const isAuthenticated = true;
  // if user is not authenticated and they are not on the login page, redirect to login
  if(isAuthenticated){
    return true;
  };
  return false;
};

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {path: "/", component: HomePage, name: "home"},
    {path: "/contact-us", component: Contact, name:"contact"},
    {path: "/contact", redirect: {name: "contact"}},
    {path: "/productList", component: ProductList, name: "productList", 
      beforeEnter: [isAdmin, isAuthenticated]
    },
    {path: "/product/:id/:categoryId?", component: ProductDetail, name:"productDetails", props: true},
    {path: "/product",component: ProductDetail},
    {path: "/login", component: Login, name: "login"},
    {path: "/noaccess", component: NoAccess, name: "noaccess"},
    {path: "/:catchAll(.*)", component: NotFound}
  ],
  linkActiveClass: "active btn btn-primary"
});

router.beforeEach((to, from, next) => {
  console.log("Global Before Each");
  // check if user is authenticated...if not redirect to login page
  const isAuthenticated = true;
  if(to.name === "home"){
    return next();
  }
  // if user is not authenticated and they are not on the login page, redirect to login
  if(!isAuthenticated && to.name !== "login"){
    return next({name: "login"});
  };
  next();
});

export default router;