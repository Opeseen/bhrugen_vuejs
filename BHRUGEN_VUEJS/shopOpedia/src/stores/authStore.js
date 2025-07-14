import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { db, auth } from '@/utility/firebaseConfig';
import { doc, setDoc } from 'firebase/firestore';
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
} from 'firebase/auth';
import { ROLE_ADMIN, ROLE_USER } from '@/constants/appConstants';

export const useAuthStore = defineStore('authStore', () => {
  // state
  const user = ref(null);
  const error = ref(null);
  const isLoading = ref(false);
  const role = ref(null);
  const initialized = ref(null);

  const isAuthenticated = computed(() => user.value !== null);
  const isAdmin = computed(() => role.value === ROLE_ADMIN);

  const initializedAuth = async () => {
    console.log('initializeAuth');

    onAuthStateChanged(auth, async (firebaseUser) => {
      if (firebaseUser) {
        user.value = firebaseUser;
        initialized.value = true;
      } else {
        clearUser();
      }
    });
  };

  // actions signup
  async function signUpUser(email, password) {
    isLoading.value = true;
    try {
      const userCredentials = await createUserWithEmailAndPassword(auth, email, password);
      await setDoc(doc(db, 'users', userCredentials.user.uid), {
        email: userCredentials.user.email,
        role: ROLE_USER,
        createdAt: new Date(),
      });
      clearUser();
      error.value = null;
    } catch (err) {
      error.value = err.message;
      throw err;
    } finally {
      isLoading.value = false;
    }
  }

  const clearUser = () => {
    user.value = null;
    user.role = null;
  };

  // actions signin
  async function signInUser(email, password) {
    isLoading.value = true;
    try {
      const userCredentials = await signInWithEmailAndPassword(auth, email, password);
      user.value = userCredentials.user;
      user.role = ROLE_USER;
      error.value = null;
    } catch (err) {
      error.value = err.message;
      throw err;
    } finally {
      isLoading.value = false;
    }
  }

  // actions signout
  async function signOutUser() {
    isLoading.value = true;
    try {
      const userCredentials = await signOut(auth);
      clearUser();
      error.value = null;
    } catch (err) {
      error.value = err.message;
      throw err;
    } finally {
      isLoading.value = false;
    }
  }

  return {
    // state
    user,
    role,
    error,
    isLoading,
    initialized,
    // getters
    isAdmin,
    isAuthenticated,
    // actions
    signUpUser,
    signInUser,
    signOutUser,
    initializedAuth,
  };
});
