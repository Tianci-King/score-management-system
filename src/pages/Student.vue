<script setup lang="ts">
  import Top from '../components/Top.vue';
  import StudentMenu from '../components/StudentMenu.vue';
  import {onMounted} from "vue";
  import cookieStore from "../stores/cookieStore";
  import router from "../routers";
  import TopTeacher from "../components/TopTeacher.vue";
  const pinia = cookieStore();
  onMounted( () => {
    console.log(pinia.identity + "e身份");
    if (pinia.identity !== "student")
       router.push("/");
  })
</script>

<template>
 <StudentMenu></StudentMenu>
  <TopTeacher></TopTeacher>
</template>



