<script setup lang="ts">
  import { NSpace,NLayout,NButton,NTable,NInput,NGradientText,NDatePicker,NCard,NModal } from 'naive-ui'
  import {ref,onMounted} from "vue";
  import updateAPI from '../apis/Examine/ApplicationUpdate';
  import deleteAPI from '../apis/Examine/ApplicationDel';
  import getAPI from '../apis/Examine/ApplicationGet';
  import timeAPI from '../apis/Examine/TimeAPI';
  import cookieStore from '../stores/cookieStore';
  import getExcuseAPI from '../apis/Examine/ExcuseGet';
  import updateExcuseAPI from '../apis/Examine/ExcuseUpdate';
  import deleteExcuseAPI from '../apis/Examine/ExcuseDel';
 


  const piniaCookie = cookieStore();
  const account = piniaCookie.account 
  const message = ref("");
  const advice = ref("");
  const Application1 = {score:"1",score_reason:"1",score_type:"d21",time:'2007.06.30 12:08:55',state:0,id:1}
  const Application2 = {score:"2",score_reason:"2",score_type:"d21",time:'2007.06.30 12:08:55',state:1,id:2}
  const Application3 = {score:"3",score_reason:"3",score_type:"d21",time:'2007.06.30 12:08:55',state:0,id:3}
  const ApplicationTest =[Application1,Application2,Application3]   //测试使用
  const selectedId = ref(); 
  const msg = ref("");
  const msgFlag = ref(false);
  const start_time = ref('2023-02-10 12:08:55');
  const end_time = ref('2023-09-30 12:08:55');


  let Applications = <any>ref([]);//获取的数据
  let Excuses = <any>ref([]);//理由库获取的数据

  const newExcuse =ref('');
  const ExcuseId = ref();
  
  const onClickPatch= (Address:any)=>{
    let path =window.location.protocol + '//'+Address;
    window.open(path);
  }

  const onClickExcuse =async()=>{
     
     const list = await ExcuseGet();
     Excuses = list.data
     const findLabel = ()=>{
     for (let i = 0 ; i<Excuses.length ; i++) {
      if(Excuses[i].value === ExcuseId.value ) 
       {message.value = Excuses[i].label;}
      }
    }
    findLabel();
  }//理由库的使用

  const ExcuseGet = async()=>{
    const res = await getExcuseAPI({
    count:account
    })
    console.log(res);
    console.log("获取理由库数据成功"); 
    return res.data;
  }



  const onClickExcuseUpdate= async()=>{
    const res = await updateExcuseAPI({
      label:newExcuse.value,
      count:account
    })
    console.log(res);
    const list = await ExcuseGet();
    Excuses.value = list.data
  }


  const onClickExcuseDelete= async()=>{
    const res = await deleteExcuseAPI({
      value:ExcuseId.value,
      count:account
    })
    console.log(res);
    const list = await ExcuseGet();
    Excuses.value = list.data
  } //理由库的接口函数



  const onClickSelect = (id:number)=>{
  selectedId.value = id;
  }

  const onClickUpdate1 = async()=>{
    const res = await updateAPI({
     id:selectedId.value,
     advice:advice.value,
     message:message.value,
     state:1,
    });
    console.log(res);
    msg.value = res.data.msg;
    if(msg.value!=""){
      msgFlag.value=true;
    }
    const list = await getApplications();
    Applications.value = list.data;
    message.value ="";
    advice.value ="";
    selectedId.value ="";
  }  
  //Update1是通过申报

  const onClickUpdate2 = async()=>{
    const res = await updateAPI({
     id:selectedId.value,
     advice:advice.value,
     message:message.value,
     state:2,
    });
    console.log(res);
    const list = await getApplications();
    Applications.value = list.data;
    message.value ="";
    advice.value ="";
    selectedId.value ="";
  }
  //Update2是驳回申报

  const onClickDelete = async(id:number) =>{
    const res = await deleteAPI({
     id:id
     });
    console.log(res);
    const list = await getApplications();
    Applications.value = list.data;
   } 


  const onClickTime = async()=>{
    const res = await timeAPI({
      start_time:start_time,
      end_time:end_time,
      count:account
    });
    console.log(res);
  }


  const getApplications = async () =>{
    const res = await getAPI({
      account:account
    });
    console.log(res);
    console.log("获取申报数据成功"); 
    return res.data;
  }
  



  onMounted(
  async ()=>{
  const res = await getApplications();
  Applications.value = res.data;
  const res2 = await ExcuseGet();
  Excuses.value = res2.data;
})

</script>
 
<template>

  
  <n-layout id="layout1">
  <n-card>
     <h1 id="Examine">审批申报</h1>
  
  <n-space>
        <n-space vertical>    
        <h2>申报栏</h2>
        <n-table>
           <thead>
             <tr>
             <th>申报序号</th>
             <th>申报分数</th>
             <th>申报项目</th>
             <th>申报原因</th>
             <th>申报时间</th>
             <th>申报附件</th>
             <th>审批状态</th>
             <th>审批理由</th>
             <th>审批建议</th>
             <th></th>
             </tr>
           </thead>
           <tbody>
             <tr v-for="Application in Applications">
               <td>{{ Application.id }}</td>
               <td>{{ Application.score }}</td>
               <td>{{ Application.score_type }}</td>
               <td>{{ Application.score_reason }}</td>
               <td>{{ Application.time }}</td>
               <td><n-button @click="onClickPatch(Application.address)">获取附件</n-button></td>
               <td v-if="Application.state===0"><n-gradient-text type="error">未审批</n-gradient-text></td>
               <td v-if="Application.state===1"><n-gradient-text type="success">已通过</n-gradient-text></td>
               <td v-if="Application.state===2"><n-gradient-text type="warning">已驳回</n-gradient-text></td>
               <td>{{ Application.message }}</td>
               <td>{{ Application.advice }}</td>
               <td><n-button size="small" @click="onClickSelect(Application.id)">选择</n-button></td>
               <td><n-button size="small" v-if="Application.state!==0" @click="onClickDelete(Application.id)">撤回</n-button></td>
              </tr>
           </tbody>
         </n-table>
         </n-space>

     
       <n-space vertical>
          <h2 id="title">审批栏</h2>
          <n-space>
            <n-input disabled placeholder="选中的申报序号:" id="h2"></n-input>
            <p>{{ selectedId }}</p>
          </n-space>
            <n-input placeholder="审批建议（可无）" v-model:value="advice"></n-input>
            <n-input placeholder="审批理由" class="Content" 
            v-model:value="message"
            type="textarea" clearable >
            </n-input>
            <n-space space-around>
              <n-button @click="onClickUpdate1">通过</n-button>
              <n-button @click="onClickUpdate2">驳回</n-button>
            </n-space>
       </n-space>  
 
       <n-space vertical>
        <h2>理由库</h2>
        <n-select vertical placeholder="选择理由" :options="Excuses" v-model:value="ExcuseId" 
        ></n-select>

        <n-space>
        <n-input disabled placeholder="选中的理由序号:" id="h2"></n-input>  
        <p>{{ ExcuseId }}</p> 
        </n-space>
    
        <n-space>
        <n-button @click="onClickExcuse">上传</n-button>
        <n-button @click="onClickExcuseDelete">删除</n-button>
        </n-space>
        <n-input placeholder="新建理由内容"
        v-model:value="newExcuse" 
        ></n-input>
        <n-button @click="onClickExcuseUpdate">新建</n-button>
       </n-space>
    
       <n-space>
        <n-card id="time">
        <h4>申报递交时间设置：</h4>
        <n-date-picker
        v-model:formatted-value="start_time"
        value-format="yyyy-MM-dd HH:mm:ss"
        type="datetime"
        clearable
        />

        <n-date-picker
        v-model:formatted-value="end_time"
        value-format="yyyy-MM-dd HH:mm:ss"
        type="datetime"
        clearable
        />
        <n-button @click="onClickTime()">递交</n-button>
        </n-card>
       </n-space>
<n-modal v-model:show="msgFlag">
    <n-card
      style="width: 300px"
      title="注意！"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      该项目或该分项分数超过上限!
    </n-card>
  </n-modal>
  </n-space>
  </n-card>
  </n-layout>
  
</template>

<style scoped>
#layout1{
height:100%;
width: 80%;
top: 80px;
position: absolute;
left: 12%;
right: 0px;
background-color: white;
}

#h2{
  width: 125px;
}

#Examine{
  position: relative;
  left: 40%;
}

#time{
  position: relative;
  top: 25%;
}
</style>