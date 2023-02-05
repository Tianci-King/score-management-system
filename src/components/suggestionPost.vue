<script setup lang="ts">
  import { NSpace,NLayout} from 'naive-ui'
  import studentService from "../apis/studentService";
  import {computed, ref} from "vue";
  import cookieStore from "../stores/cookieStore";

  const isAnonymity = ref<Boolean>(false);
  const question = ref<string>("");
  const advice = ref<string>("");
  const accountStore = cookieStore();

  async function post(){
    const data = {
      "account": accountStore.account,
      "anonymity": isAnonymity.value? 1 : 0,
      "question": question.value,
      "advice": advice.value
    }

    const res = await studentService.postSuggestion(data);
    if(res.data.msg === "OK") {
      alert("建议发送成功!");
      question.value = "";
      advice.value = "";
    }
    else {
      alert("网络连接不正常 :(");
      console.log(res.data);
    }
  }

</script>

<template>
<n-space>
  <n-layout>
    <h1 id="MailBox">建议箱</h1>
    <n-input placeholder="请输入建议对象" v-model:value="question"></n-input>
    <n-input placeholder="请输入建议内容" v-model:value="advice"></n-input>
    <n-switch v-model:value="isAnonymity" ></n-switch>
    <n-button @click="post">提交建议</n-button>
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