<template>
  <n-space>
    <n-layout>
      <n-card>
      <h1>添加学生账号</h1>
      <student-item :data="addData" :is-add="true" @add="addStudentItem" @del="getStudentItem"/>
      <template v-for="item in formData">
          <student-item :data="item" :is-add="false" />
      </template>
      </n-card>
    </n-layout>
  </n-space>
</template>

<script setup lang="ts">


import {computed, onMounted, ref} from "vue";
import { NSpace,NLayout, formDark, NButton, NIcon, NP, NTable, NText, NUpload, NUploadDragger,NCard } from 'naive-ui';
import StudentItem from "./studentItem.vue";
import adminService from "../apis/adminService";
const addData = ref({
  "account": "",
});
const formData = ref();
function getStudentItem () {
  adminService.getStudent().then((res) => {
    if(res.data.msg === "OK")
      formData.value = res.data.data;
    else
      alert(res.data.msg)
  })
}

function addStudentItem() {
  adminService.addStudent(addData.value)
      .then((res) => {
         if(res.data.msg === "OK")
           alert("添加成功");
         else
           alert(res.data.msg);
      })
  getStudentItem();
}

onMounted(() => {
  getStudentItem();
})
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