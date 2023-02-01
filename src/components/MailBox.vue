<script setup lang="ts">
  import { NSpace,NLayout} from 'naive-ui'
  import postSuggestion from "../apis/studentService";

  async function post(){
    const data = {
      "account": "123",
      "anonymity": 1,
      "question": "123",
      "advice": "123"
    }

    const res = await postSuggestion(data);
    if(res.data.msg === "OK")
      alert("建议发送成功!");
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
   <p>这是内容1</p>
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