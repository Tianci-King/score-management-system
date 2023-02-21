<script setup lang="ts">
import { NSpace, NLayout, formDark, NButton, NIcon, NP, NTable, NText, NUpload, NUploadDragger } from 'naive-ui';
import cookieStore from '../stores/cookieStore';
import { storeToRefs } from "pinia";
import studentService from '../apis/studentService';
import { Ref, ref, onMounted } from 'vue';
import { defineComponent } from 'vue'
import type { UploadInst, UploadFileInfo } from 'naive-ui'
var formdata = <any>ref([]);

const store = cookieStore();
const { account, beginTime, endTime } = storeToRefs(store);

const formyear = <any>ref("");
const formscoretype = <any>ref("");
const formscore = <any>ref("");
const formscoreres = <any>ref("");

//获取当前时间
var myDate = new Date();
var time = myDate.toLocaleString();
time = time.substring(0, 5) + '0' + time.substring(5,);
console.log(time);

var fileListLengthRef = ref(0);
var uploadRef = ref<UploadInst | null>(null);
var upload = uploadRef;
var fileListLength = fileListLengthRef;
const handleChange = (options: { fileList: UploadFileInfo[] }) => {
  fileListLengthRef.value = options.fileList.length;
}
const handleClick = () => {
  if (time >= beginTime.value && time <= endTime.value) {
    uploadRef.value?.submit();
    alert("申报成功！");
  } else {
    alert("当前未在申报时间范围内，无法申报，请与管理员联系！");
  }
}



async function getCom() {
  const forminfo = <any>ref({
    count: account.value,
    year: formyear.value,
    score_type: formscoretype.value,
    score: formscore.value,
    score_reason: formscoreres.value,
  });

  const res = await studentService.queryApply(account.value);
  console.log(forminfo.value.toString + "test");

  if (res.data.msg === "OK") {
    alert("查询申报结果成功！");
    formdata.value = res.data.data;
    console.log(forminfo.value);
  }
  else if (res.data.msg === "未提交过申报" || res.data.code === 404) {
    alert("未提交过申报，查询结果为空！");
  }
  else {
    alert("网络连接不正常 :(");
    console.log(res.data);
  }
}

onMounted(() => {
  handleClick;
})
</script>

<template>
<n-space>
  <n-layout>
  <n-card>
   <h1 id="Blank">申报</h1>
   <p>填写您需要申报的信息表单</p>
   <n-space vertical>
            <n-input placeholder="所要申报内容的学年" v-model:value="formyear" autosize style="min-width: 90%"></n-input>
            <n-input placeholder="所要申报的项目类型" v-model:value="formscoretype" autosize style="min-width: 90%"
              size="large"></n-input>
              <n-input placeholder="申报分数" v-model:value="formscore" autosize style="min-width: 90%"
              size="large"></n-input>
            <n-input placeholder="申报理由" v-model:value="formscoreres" autosize style="min-width: 90%"
              size="large"></n-input>
          </n-space>
          <br />
   <p>上传您需要申报的文件</p>
   <n-upload
    multiple
    directory-dnd
    action="/api/student/apply"
    method="put"
    :data= forminfo
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
        上传您需要申报的文件
      </n-p>
    </n-upload-dragger>
  </n-upload>
</n-card>
  </n-layout>
</n-space>

<n-space vertical>

          <n-layout  class="shenbao">
            <h1>申报查询</h1>
          <n-space>
            <n-button @click="getCom" id="query">申报查询</n-button>
          </n-space>
          </n-layout>

          <n-space>
            <n-layout class="form">
            <n-card>
              <n-table>
                <thead>
                  <tr>
                    <th>申报序号</th>
                    <th>申报内容</th>
                    <th>申报原因</th>
                    <th>申报时间</th>
                    <th>审批状态</th>
                    <th></th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="form in formdata">
                    <td>{{ form.id }}</td>
                    <td>{{ form.type }}</td>
                    <td>{{ form.score_reason }}</td>
                    <td>{{ form.time }}</td>
                    <td v-if="form.state === 1">已通过</td>
                    <td v-if="form.state === 0">未审批</td>
                    <td v-if="form.state === 2">已驳回</td>
                  </tr>
                </tbody>
              </n-table>
             </n-card>
            </n-layout>
          </n-space>
          
        </n-space>
</template>

<style scoped>
.n-layout {
  height: 100%;
  width: 30%;
  top: 80px;
  position: absolute;
  left: 16%;
  right: 0px;
  background-color: white;
}


.form {
  top: 200px;
  left: 50%;
  width: 47%;
}

.shenbao {
  top:80px;
  left:65%;
}

#query{
  position: relative;
  left: 45%;
}
</style>

