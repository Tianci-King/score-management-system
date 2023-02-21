<script setup lang="ts">
  import { NSpace,NLayout,NButton,NCard,NInput } from 'naive-ui'
  import {ref} from "vue";
  import cookieStore from "../stores/cookieStore";
  import teacherService from "../apis/teacherServeice";
  import ScoreDisplayTea from "./scoreDisplayTea.vue";

  const cookie = cookieStore();
  const year = ref<number>();
  const account = ref("");
  const resData = ref();
  const onSuccess = ref<Boolean>(false);
  async function query() {
    onSuccess.value = false;
    const res = await teacherService.queryScore({
       "tcount": cookie.account.toString(),
       "scount": account.value,
        "year": parseInt(year.value),
    })
    if(res.data.msg === "OK"){
        resData.value = res.data.data;
        onSuccess.value = true;
    }
    else {
      alert(res.data.msg)
    }
  }
  //TODO: 分数项大象自动计算 话题广场自动刷新 建议修改页面显示 申报时间 match管理 审批申诉状态显示数据
</script>

<template>
<n-space>
  <n-layout>
  <n-space vertical>
    <n-card id="card">
    <h1 id="Query">成绩管理</h1>
    <div>
      <n-input  round placeholder="学号"
                class="account" v-model:value="account"/>
    </div>
    <div>
      <n-input round placeholder="年份"
               class="year" v-model:value="year"/>
    </div>
    <n-button id="button" @click="query" round>查找</n-button>
    <score-display-tea v-if="onSuccess" :res="resData"></score-display-tea>
    </n-card>
  </n-space>
  </n-layout>
</n-space>
</template>

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
.year{
  top: 3px;
  width: 200px;
}
.account{
  width: 200px;
}

#card{
  width: 100%;
  top: 50px;
}

#button{
  top: 5px;
}
</style>



