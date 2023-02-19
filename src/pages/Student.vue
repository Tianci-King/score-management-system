<script setup lang="ts">
  import Top from '../components/Top.vue';
  import StudentMenu from '../components/StudentMenu.vue';
  import {onMounted} from "vue";
  import cookieStore from "../stores/cookieStore";
  import router from "../routers";
  const pinia = cookieStore();
  onMounted( () => {
    console.log(pinia.identity + "e身份");
    if (pinia.identity !== "student")
       router.push("/");
  })
</script>

<template>
 <StudentMenu></StudentMenu>
 <Top></Top>
</template>



