<template>
  <div class="container py-5 my-3">
    <div class="row justify-content-center">
      <div class="col-md-6 col-lg-4 border rounded">
        <div class="shadow-sm">
          <div class="card-body p-4">
            <h4 class="text-center mb-4">Create Account</h4>
            <form @submit.prevent="handleSignUp">
              <div class="mb-3">
                <label for="email" class="form-label">Email</label>
                <input type="email" class="form-control" id="email" v-model="user.email" required />
              </div>
              <div class="mb-4">
                <label for="password" class="form-label">Password</label>
                <input
                  type="password"
                  class="form-control"
                  id="password"
                  v-model="user.password"
                  required
                />
              </div>
              <button type="submit" class="btn btn-success w-100" :disabled="authStore.isLoading">
                <span
                  class="spinner-border spinner-border-sm me-2"
                  v-if="authStore.isLoading"
                ></span>
                Create Account
              </button>
              <div class="alert alert-danger mt-3 mb-0" v-if="error">{{ error }}</div>
            </form>
            <p class="mt-3 form-label text-center">
              Already have an account?
              <RouterLink :to="{ name: APP_ROUTE_NAMES.SIGN_IN }">Login here</RouterLink>
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
import { useAuthStore } from '@/stores/authStore';
import { auth } from '@/utility/firebaseConfig';

const { showSuccess, showError } = useSwal();
const authStore = useAuthStore();
const router = useRouter();
const error = ref('');
const user = reactive({
  email: '',
  password: '',
});

const handleSignUp = async () => {
  try {
    error.value = '';
    await authStore.signUpUser(user.email, user.password);
    showSuccess('Account created successfully');
  } catch (err) {
    error.value = err.message;
    console.log('Error is: ', err);
    showError(err.message);
  }
};
</script>
