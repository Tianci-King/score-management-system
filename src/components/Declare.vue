<script setup lang="ts">
  import { NSpace,NLayout} from 'naive-ui'
import { storeToRefs } from 'pinia';
import internal from 'stream';
  import studentService from "../apis/studentService";
  import cookieStore from '../stores/cookieStore';

  const store = cookieStore();
  const { account } = storeToRefs(store);
  let formyear:number;
  let formappeal:string;
  let formappeal_reason:string;

  async function sendCom(){
    const data = {
      "count": account,
      "year": formyear,
      "appeal": formappeal,
      "appeal_reason": formappeal_reason,
    }
    const res = await studentService.getComplaint(data);
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
  <n-space vertical>
  <n-layout>
   <h1 id="Complaints">申报提交</h1>
   <div>
    <p>申报文件</p>
   </div>

   <n-upload
    multiple
    directory-dnd
    action="https://www.mocky.io/v2/5e4bafc63100007100d8b70f"
    :max="5"
  >
    <n-upload-dragger>
      <div style="margin-bottom: 12px">
        <n-icon size="48" :depth="3">
          <archive-icon />
        </n-icon>
      </div>
      <n-text style="font-size: 16px">
        点击或者拖动文件到该区域来上传
      </n-text>
      <n-p depth="3" style="margin: 8px 0 0 0">
        请不要上传敏感数据，比如你的银行卡号和密码，信用卡号有效期和安全码
      </n-p>
    </n-upload-dragger>
  </n-upload>

   <n-space>
    <n-button @click="sendCom">提交申报</n-button>
   </n-space>
  </n-layout>
</n-space>

<n-space vertical>
          <h2>审批栏</h2>
</n-space>
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