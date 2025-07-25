import { createRouter, createWebHistory } from 'vue-router';
import AccessDenied from '@/views/auth/AccessDenied.vue';
import NotFound from '@/views/auth/NotFound.vue';
import Signin from '@/views/auth/Signin.vue';
import Signup from '@/views/auth/Signup.vue';
import ContactUs from '@/views/home/ContactUs.vue';
import Home from '@/views/home/Home.vue';
import ProductList from '@/views/product/ProductList.vue';
import ProductUpsert from '@/views/product/ProductUpsert.vue';
import { APP_ROUTE_NAMES } from '@/constants/routeNames';
import { useAuthStore } from '@/stores/authStore';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: APP_ROUTE_NAMES.HOME,
      component: Home,
    },
    {
      path: '/sign-in',
      name: APP_ROUTE_NAMES.SIGN_IN,
      component: Signin,
    },
    {
      path: '/sign-up',
      name: APP_ROUTE_NAMES.SIGN_UP,
      component: Signup,
    },
    {
      path: '/access-denied',
      name: APP_ROUTE_NAMES.ACCESS_DENIED,
      component: AccessDenied,
    },
    {
      path: '/not-found',
      name: APP_ROUTE_NAMES.NOT_FOUND,
      component: NotFound,
    },
    {
      path: '/contact-us',
      name: APP_ROUTE_NAMES.CONTACT_US,
      component: ContactUs,
    },
    {
      path: '/product-list',
      name: APP_ROUTE_NAMES.PRODUCT_LIST,
      component: ProductList,
    },
    {
      path: '/product-upsert',
      name: APP_ROUTE_NAMES.PRODUCT_CREATE,
      component: ProductUpsert,
    },
    {
      path: '/product-update/:id',
      name: APP_ROUTE_NAMES.PRODUCT_UPDATE,
      component: ProductUpsert,
    },
  ],
});

router.beforeEach(async (toString, from) => {
  const authStore = useAuthStore();

  if (!authStore.initialized) {
    await authStore.initializedAuth();
  }
});

export default router;
