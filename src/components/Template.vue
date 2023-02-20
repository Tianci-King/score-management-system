<script setup lang="ts">
  import { NSpace,NLayout} from 'naive-ui'
  import { storeToRefs } from 'pinia';
  import  cookieStore  from '../stores/cookieStore'

  const store = cookieStore();
  const { match,account } = storeToRefs(store);

  //0503机械学院0315计算机学院
  const grade = (match.value).substring(0,4);
  const major = (match.value).substring(4,8);
  console.log(grade);
  console.log(major);
</script>

<template>
<n-space>
  <n-layout>
   <n-card title="Welcome">
    <p>学号：{{account}}</p>
    <p v-if="grade === '2022'">年级：大一</p>
    <p v-if="grade === '2021'">年级：大二</p>
    <p v-if="grade === '2020'">年级：大三</p>
    <p v-if="grade === '2019'">年级：大四</p>
    <p v-if="major === '0503'">学院：机械学院</p>
    <p v-if="major === '0315'">学院：计算机学院</p>    
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