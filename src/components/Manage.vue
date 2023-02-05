<script setup lang="ts">
  import { NSpace,NLayout} from 'naive-ui'
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
       "tacount": cookie.account.toString(),
       "sacount": account.value,
        "year": year.value,
    })
    if(res.data.msg === "OK"){
        resData.value = res.data.data;
        onSuccess.value = true;
    }
    else {
      alert(res.data.msg)
    }
  }

</script>

<template>
<n-space>
  <n-layout>
    <h1 id="Query">管理</h1>
    <div>
      <n-input  round placeholder="学号"
                class="username" v-model:value="account"/>
    </div>
    <div>
      <n-input round placeholder="年份"
               class="password" v-model:value="year"/>
    </div>
    <n-button class="button1" @click="query">查找</n-button>
    <score-display-tea v-if="onSuccess" :res="resData"></score-display-tea>
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
</style>