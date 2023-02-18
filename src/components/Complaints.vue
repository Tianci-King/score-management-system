<script setup lang="ts">
import { NSpace, NLayout } from 'naive-ui'
import { storeToRefs } from 'pinia';
import internal from 'stream';
import studentService from "../apis/studentService";
import cookieStore from '../stores/cookieStore';
import { Ref, ref, onMounted } from "vue"

const store = cookieStore();
const { account } = storeToRefs(store);
let formyear: number;
let formappeal: string;
let formappeal_reason: string;
var formdata = <any>ref([]);
var form: any;

async function sendCom() {
  const data = {
    "count": account.value,
    "year": parseInt(formyear),
    "appeal": formappeal,
    "appeal_reason": formappeal_reason,
  }
  const res = await studentService.postComplaint(data);
  if (res.data.msg === "OK")
    alert("申诉成功!");
  else {
    alert("网络连接不正常 :(");
    console.log(res.data);
  }
}

async function getCom() {
  const res = await studentService.queryAppeal(account.value);
  if (res.data.msg === "OK") {
    alert("查询申诉结果成功！");
    formdata.value = res.data.data;
    //forms = JSON.parse(JSON.stringify(formdata.value.data));
  }
  else if (res.data.msg === "未提交过申诉" || res.data.code === 404) {
    alert("未提交过申诉，查询结果为空！");
  }
  else {
    alert("网络连接不正常 :(");
    console.log(res.data);
  }
}

</script>

<template>
  <n-space vertical>
    <n-space vertical>
      <n-layout>
        <h1 id="Complaints">申诉提交</h1>
        <div>
          <n-space vertical>
            <n-input placeholder="所要申诉内容的学年" v-model:value="formyear" autosize style="min-width: 40%"></n-input>
            <n-input placeholder="所要申诉的内容，请详细描述" v-model:value="formappeal" autosize style="min-width: 40%"
              size="large"></n-input>
            <n-input placeholder="所要申诉的具体原因，请详细描述" v-model:value="formappeal_reason" autosize style="min-width: 40%"
              size="large"></n-input>
          </n-space>
        </div>

        <br />
        <n-button @click="sendCom">提交申诉</n-button>


        <br /> <br /> <br /> <br />

        <n-space vertical>
          <h1>申诉查询</h1>
          <n-space>
            <n-button @click="getCom">申诉查询</n-button>
          </n-space>
          <br />

          <n-space>
            <n-layout class="form">
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
                <tbody>
                  <tr v-for="form in formdata">
                    <td>{{ form.id }}</td>
                    <td>{{ form.appeal }}</td>
                    <td>{{ form.appeal_reason }}</td>
                    <td>{{ form.time }}</td>
                    <td v-if="form.state === 1">已通过</td>
                    <td v-if="form.state === 0">未审批</td>
                    <td v-if="form.state === 2">已驳回</td>
                  </tr>
                </tbody>
              </n-table>
            </n-layout>
          </n-space>
        </n-space>


      </n-layout>
    </n-space>
  </n-space>
</template>

<style scoped>
.n-layout {
  height: 100%;
  width: auto;
  top: 80px;
  position: absolute;
  left: 16%;
  right: 0px;
  background-color: white;
}

.form {
  top: 430px;
  left: 0%;
  width: 50%;
}

</style>
