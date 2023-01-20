<script setup lang="ts">
  import { NSpace,NLayout} from 'naive-ui'
  import postComplaint from "../apis/postComplaint";

  async function sendCom(){
    // const data = {
    //   "count": "123",
    //   "year": "123",
    //   "score_type": "123",
    //   "score": "123",
    //   "score_reason": "123"
    // }  申报的data结构

    const data = {
      "count": "123",
      "year": 123,
      "appeal": "123",
      "appeal_reason": "123",
    }
    const res = await postComplaint(data);
    if(res.data.msg === "OK")
      alert("申诉成功!");
    else {
      alert("网络连接不正常 :(");
      console.log(res.data);
    }
  }
  // 表单制作
</script>

<template>
<n-space>
  <n-layout>
   <h1 id="Complaints">申诉</h1>
   <p>这是内容2</p>
    <n-button @click="sendCom">提交申诉</n-button>
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
background-color:white;
}
</style>