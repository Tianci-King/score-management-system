<script setup lang="ts">
  import Top from '../components/Top.vue';
  import TeacherMenu from '../components/TeacherMenu.vue';
  import {onMounted} from "vue";
  import cookieStore from "../stores/cookieStore";
  import router from "../routers";

  onMounted(async () => {
    const pinia = cookieStore();
    console.log(pinia.identity);
    if (pinia.identity !== "teacher")
      await router.push("/");
  })
</script>

<template>
 <TeacherMenu></TeacherMenu>
 <Top></Top>
</template>



