import { createApp } from 'vue'
import App from './App.vue'
import Loader from './components/Modal/Loader.vue';
import router from "./Router/routes";
import './style.css'

const app = createApp(App);
app.use(router);
app.component("Loader", Loader);
app.mount('#app');