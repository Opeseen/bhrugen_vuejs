import { createApp } from 'vue'
import App from './App.vue'
import Loader from './components/Loader.vue';

const app = createApp(App);
app.component("Loader", Loader); // register as global component
app.mount('#app');
