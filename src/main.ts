import { createApp } from 'vue'
import App from './App.vue'
import naive from "naive-ui";
import router from './routers'
import {createPinia} from "pinia";
const app = createApp(App);
const pinia = createPinia();
app.use(naive);
app.use(router);
app.use(pinia);
app.mount('#app');