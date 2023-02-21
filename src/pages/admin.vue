<script setup lang="ts">
import Top from '../components/TopAdmin.vue';
import StudentMenu from '../components/StudentMenu.vue';
import AdminMenu from "../components/adminMenu.vue";
import {onMounted} from "vue";
import cookieStore from "../stores/cookieStore";
import router from "../routers";
import TopAdmin from '../components/TopAdmin.vue';

const pinia = cookieStore();
onMounted( () => {
  console.log(pinia.identity);
  if (pinia.identity !== "admin")
     router.push("/");
})
</script>

<template>
  <admin-menu></admin-menu>
  <TopAdmin></TopAdmin>
</template>


