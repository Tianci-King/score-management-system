<script setup lang="ts">
  import { NSpace,NLayout,NButton} from 'naive-ui'
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
       "year": parseInt(year.value),
     }
     const res = await studentService.queryScore(data);
     if (res.data.msg === "OK") {
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
   <n-space vertical>
     <h3 id="Query">成绩查询</h3>
      <div>
        <n-input  round placeholder="要查找的学号"
                  class="account" v-model:value="account"/>
      </div>
      <div>
        <n-input round placeholder="年份"
                 class="year" v-model:value="year"/>
      </div>
      <n-button class="button1" @click="query" round size="small">查找</n-button>
      <score-display v-if="onSuccess" :score="resData"></score-display>
    </n-space>
  </n-layout>
</n-space>

</template>

<style scoped>
.n-layout{
height:100%;
width: 30%;
top: 80px;
position: absolute;
left: 20%;
right: 0px;
background-color: white;
}

.year{
  width: 200px;
}
.account{
  width: 200px;
}
</style>