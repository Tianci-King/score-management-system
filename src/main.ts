import { createApp } from 'vue'
import App from './App.vue'
import naive from "naive-ui";
import router from './routers'
const app = createApp(App);
app.use(naive);
app.use(router);
app.mount('#app');