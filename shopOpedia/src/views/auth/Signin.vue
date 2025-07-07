<template>
  <div class="container py-5">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4 border">
        <div class="shadow-sm">
          <div class="card-body p-4">
            <h4 class="text-center mb-4">Sign In</h4>
            <form @submit.prevent="handleSignIn">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" required v-model="user.email" />
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  required
                  v-model="user.password"
                />
              </div>
              <button type="submit" class="btn btn-success w-100">
                <span class="spinner-border spinner-border-sm me-2"></span>
                Sign In
              </button>
              <div v-if="error">{{ error }}</div>
            </form>
            <p class="mt-3 form-label text-center">
              Don't have an account?
              <RouterLink :to="{ name: APP_ROUTE_NAMES.SIGN_UP }">Register here</RouterLink>
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue';
import { useRouter, RouterLink } from 'vue-router';
import { useSwal } from '@/utility/useSwal';
import { APP_ROUTE_NAMES } from '@/constants/routeNames';

const { showSuccess, showError } = useSwal();
const router = useRouter();
const error = ref('');
const user = reactive({
  email: '',
  password: '',
});

const handleSignIn = async () => {
  try {
    error.value = '';
    console.log(user);
    await showSuccess('Login successfully');
    router.push({ name: APP_ROUTE_NAMES.HOME });
  } catch (err) {
    error.value = err.message;
    showError(error.message);
  }
};
</script>
