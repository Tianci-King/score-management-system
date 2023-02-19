<script setup lang="ts">
  import { NSpace,NLayout,NButton,NTable,NInput,NGradientText } from 'naive-ui'
  import {ref,onMounted} from "vue";
  import updateAPI from '../apis/Examine/ApplicationUpdate';
  import deleteAPI from '../apis/Examine/ApplicationDel';
  import getAPI from '../apis/Examine/ApplicationGet';
  import cookieStore from '../stores/cookieStore';
  import getExcuseAPI from '../apis/Examine/ExcuseGet';
  import updateExcuseAPI from '../apis/Examine/ExcuseUpdate';
  import deleteExcuseAPI from '../apis/Examine/ExcuseDel';
  import addressAPI from '../apis/Examine/AddressGet';
import { id } from 'date-fns/locale';
  const piniaCookie = cookieStore();
  const account = piniaCookie.account 
  const message = ref("");
  const advice = ref("");
  const Application1 = {score:"1",score_reason:"1",score_type:"d21",time:'2007.06.30 12:08:55',state:0,id:1}
  const Application2 = {score:"2",score_reason:"2",score_type:"d21",time:'2007.06.30 12:08:55',state:1,id:2}
  const Application3 = {score:"3",score_reason:"3",score_type:"d21",time:'2007.06.30 12:08:55',state:0,id:3}
  const ApplicationTest =[Application1,Application2,Application3]   //测试使用
  const selectedId = ref(); 
  let Applications = <any>ref([]);//获取的数据
  let Excuses = <any>ref([]);//理由库获取的数据

  const newExcuse =ref('');
  const ExcuseId = ref();
  
  const onClickPatch= (Address:any)=>{
    window.location.href=Address;
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
    })
    console.log(res);
    const list = await ExcuseGet();
    Excuses.value = list.data
  }


  const onClickExcuseDelete= async(value:any)=>{
    const res = await deleteExcuseAPI({
      value:value
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
    const list = await getApplications();
    Applications.value = list.data;
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
     <h1 id="Examine">审批申报</h1>
  <n-space>
        <n-space vertical>    
        <h2>申报栏</h2>
        <n-table>
           <thead>
             <tr>
             <th>申报序号</th>
             <th>申报分数</th>
             <th>申报学科</th>
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
          <h2>审批栏</h2>
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

  </n-space>

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
</style>