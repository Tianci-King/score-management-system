<script setup lang="ts">
import Top from '../components/Top.vue';
import StudentMenu from '../components/StudentMenu.vue';
import AdminMenu from "../components/adminMenu.vue";
import {onMounted} from "vue";
import cookieStore from "../stores/cookieStore";
import router from "../routers";

const pinia = cookieStore();
onMounted( () => {
  console.log(pinia.identity);
  if (pinia.identity !== "admin")
     router.push("/");
})
</script>

<template>
  <admin-menu></admin-menu>
  <Top></Top>
</template>


