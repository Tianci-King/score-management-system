<script setup lang="ts">
  import { NSpace,NLayout} from 'naive-ui'
  import { storeToRefs } from 'pinia';
  import  cookieStore  from '../stores/cookieStore'
  import {ref} from 'vue'
  const store = cookieStore();
  const { routername,match,account } = storeToRefs(store);

  var grade = (match.value).substring(0,4);
  var major = (match.value).substring(4,8);
  console.log(grade);
  console.log(major);




function ref(arg0: string) {
throw new Error('Function not implemented.');
}
</script>

<template>
<n-space>
  <n-layout>
   <n-card v-if="routername === 'Student'" title="Welcome">
    <p>学号：{{account}}</p>
    <p v-if="grade === '2022'">年级：大一</p>
    <p v-if="grade === '2021'">年级：大二</p>
    <p v-if="grade === '2020'">年级：大三</p>
    <p v-if="grade === '2019'">年级：大四</p>
    <p v-if="major === '0503'">学院：机械学院</p>
    <p v-if="major === '0315'">学院：计算机学院</p>
   </n-card>

   <n-card v-if="routername === 'Teacher'" title="欢迎回来">
    <p>辅导员{{account}} ， 您好！</p>
    <p v-if="major === '0503'">您当前所管理的学院：机械学院</p>
    <p v-if="major === '0315'">您当前所管理的学院：计算机学院</p>
    <br />
    <h5>操作完成后请您务必注销</h5>
   </n-card>
  </n-layout>
</n-space>
</template>

<style scoped>
.n-layout{
height:100%;
width: 20%;
top: 100px;
position: absolute;
left: 16%;
right: 0px;
background-color: white;
}
</style>