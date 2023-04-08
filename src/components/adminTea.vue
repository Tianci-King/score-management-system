<template>
  <n-space>
    <n-layout>
      <n-card>
      <h1>管理辅导员账号</h1>
      <teacher-item :data="addData" :is-add="true" @add="addTeacher"/>
      <template v-for="item in data" v-if="!isFlash">
        <teacher-item :data="item" :is-add="false" v-if="!isFlash"/>
      </template>
      </n-card>
    </n-layout>
  </n-space>
</template>

<script setup lang="ts">
import adminService from "../apis/adminService";
import {onMounted, ref} from "vue";
import TeacherItem from "./teacherItem.vue";
import { NSpace,NLayout, NCard } from "naive-ui";
const data = ref();
const addData = ref({
  count: "",
  match: "",
  power1: 0,
  power2: 0,
  power3: 0,
  power4: 0,
  power5: 0,
  power6: 0,
});

const isFlash = ref<boolean>(false);

function addTeacher(){
  adminService.addTeacher({
    "count": addData.value.count,
    "match": addData.value.match,
    "power1": addData.value.power1? 1 : 0,
    "power2": addData.value.power2? 1 : 0,
    "power3": addData.value.power3? 1 : 0,
    "power4": addData.value.power4? 1 : 0,
    "power5": addData.value.power5? 1 : 0,
    "power6": addData.value.power6? 1 : 0,
  }).then((res) => {
    if (res.data.msg === "OK") {
      alert("添加成功!");
      isFlash.value = true;
      getTeacherItem();
      console.log(data.value);
    }
    else
      alert(res.data.msg);

    isFlash.value = false;
  });
}

function getTeacherItem() {
  adminService.getTeacher().then((res) => {
    if(res.data.msg === "OK") {
      data.value = res.data.data;
      console.log(data.value);
    }
    else
      alert(res.data.msg);
  });
}

onMounted(() => {
   getTeacherItem();
});

</script>

<style scoped>
.n-layout{
   height:100%;
   width: 80%;
   top: 80px;
   position: absolute;
   left: 12%;
   right: 0px;
   background-color: white;
 }
</style>