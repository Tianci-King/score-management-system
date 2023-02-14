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
   <h1 id="Complaints">申诉提交</h1>
   <div>
    <p>申诉表单</p>
    <n-space vertical>
      <n-input placeholder="所要申诉内容的学年" v-model:value="formyear" autosize style="min-width: 40%" ></n-input>
      <n-input placeholder="所要申诉的内容，请详细描述" v-model:value="formappeal" autosize style="min-width: 40%" size="large"></n-input>
      <n-input placeholder="所要申诉的具体原因，请详细描述" v-model:value="formappeal_reason" autosize style="min-width: 40%" size="large"></n-input>
    </n-space>
   </div>
   <n-space>
    <n-button @click="sendCom">提交申诉</n-button>
   </n-space>
  <br />   <br />   <br />   <br />
  <n-space vertical>
    <h1>申诉查询</h1>
    <n-button @click="sendCom">申诉查询</n-button>

    <n-space vertical>    
        <n-table>
           <thead>
             <tr>
             <th>申诉序号</th>
             <th>申诉内容</th>
             <th>申诉原因</th>
             <th>申诉时间</th>
             <th>审批状态</th>
             <th></th>
             <th></th>
             </tr>
           </thead>
           
         </n-table>
         </n-space>
  </n-space>


  </n-layout>
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