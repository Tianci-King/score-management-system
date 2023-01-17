import Login from "../pages/Login.vue";
import Template from "../components/Template.vue";
import Change from "../components/Change.vue";
import Complaints from "../components/Complaints.vue";
import Query from "../components/Query.vue"
import Layout from "../pages/Layout.vue";
import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/Login"
  },
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  {
    path: "/Layout",
    name: "Layout",
    components: {
      'default': Layout,
      'right': Template,
    }
  },
  {
    path: "/Layout",
    name: "Change",
    components: {
      'default': Layout,
      'right': Change,
    }
  },
  {
    path: "/Layout",
    name: "Complaints",
    components: {
      'default': Layout,
      'right': Complaints,
    }
  },
  {
    path: "/Layout",
    name: "Query",
    components: {
      'default': Layout,
      'right': Query,
    }
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
