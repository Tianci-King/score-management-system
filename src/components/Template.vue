<script setup lang="ts">
import { NSpace,NLayout,NGradientText,NCard} from 'naive-ui'
import { storeToRefs } from 'pinia';
import  cookieStore  from '../stores/cookieStore'

const store = cookieStore();
const { match,account } = storeToRefs(store);

//0503机械学院0315计算机学院
const grade = (store.match).substring(0,4);
const major = (store.match).substring(4,8);
console.log(grade);
console.log(major);
</script>

<template>
  <n-space>
    <n-layout>
     <n-gradient-text id="h"
        :gradient="{
        deg: 180,
        from: 'rgb(85, 85, 85)',
        to: 'rgb(170, 170, 170)'
        }"
        >
         Welcome!    
        </n-gradient-text>
      <n-card >
       
 
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

#h {
  font-size: 29px;
  left: 30%;
  position: relative;
}
</style>