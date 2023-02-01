<script setup lang="ts">
  import { NSpace,NLayout} from 'naive-ui'
  import {ref} from "vue";
  import studentService from "../apis/studentService";
  import {Score} from "../types/score";
  import ScoreDisplay from "./scoreDisplaySu.vue";
  const year = ref<number>();
  const account = ref("");
  const onSuccess = ref(false);
  const resData = ref<Score[]>();
   async function query() {
     onSuccess.value = false
     const data = {
       "account": account.value.toString(),
       "year": year.value,
     }
     const res = await studentService.queryScore(data);
     if (res.data.msg === "OK") {
       console.log(res.data.data);
       resData.value = res.data.data;
       onSuccess.value = true;
     } else {
       alert(res.data.msg);
     }
   }


</script>

<template>
<n-space>
  <n-layout>
   <h1 id="Query">成绩查询</h1>
    <div>
      <n-input  round placeholder="要查找的学号"
                class="username" v-model:value="account"/>
    </div>
    <div>
      <n-input round placeholder="年份"
               class="password" v-model:value="year"/>
    </div>
    <n-button class="button1" @click="query">查找</n-button>
    <score-display v-if="onSuccess" :score="resData"></score-display>
  </n-layout>
</n-space>

</template>

<style scoped>
.n-layout{
height:100%;
width: auto;
top: 80px;
position: absolute;
left: 16%;
right: 0px;
background-color: white;
}
</style>