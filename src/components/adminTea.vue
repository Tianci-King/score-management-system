<template>
  <n-space>
    <n-layout>
      <h1>添加辅导员账号</h1>
      <teacher-item :data="addData" :is-add="true" @add="addTeacher"/>
      <template v-for="item in data">
        <teacher-item :data="item" :is-add="false"/>
      </template>
    </n-layout>
  </n-space>
</template>

<script setup lang="ts">
import adminService from "../apis/adminService";
import {onMounted, ref} from "vue";
import TeacherItem from "./teacherItem.vue";

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
      alert("添加成功!")
      getTeacherItem()
    }
    else
      alert(res.data.msg);
  })
}

function getTeacherItem() {
  adminService.getTeacher().then((res) => {
    if(res.data.msg === "OK") {
      data.value = res.data.data;
    }
    else
      alert(res.data.msg);
  });
}

onMounted(() => {
   getTeacherItem();
})

</script>

<style scoped>
.n-layout{
   height:100%;
   width: auto;
   top: 80px;
   position: absolute;
   left: 12%;
   right: 0px;
   background-color: white;
 }
</style>