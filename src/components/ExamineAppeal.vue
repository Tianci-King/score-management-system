<script setup lang="ts">
  import { NSpace,NLayout,NButton,NTable,NInput,NSelect } from 'naive-ui'
  import {ref,onMounted} from "vue";
  import updateAPI from '../apis/Examine/AppealUpdate';
  import deleteAPI from '../apis/Examine/AppealDel';
  import getAPI from '../apis/Examine/AppealGet';
  import cookieStore from '../stores/cookieStore';
  import getExcuseAPI from '../apis/Excuse/ExcuseGet';
  import updateExcuseAPI from '../apis/Excuse/ExcuseUpdate';
  import deleteExcuseAPI from '../apis/Excuse/ExcuseDel';
  const piniaCookie = cookieStore();
  const account = piniaCookie.account 
  const message = ref("");
  const advice = ref("");
  const Appeal1 = {appeal:"1",appeal_reason:"1",time:'2007.06.30 12:08:55',state:0,id:1}
  const Appeal2 = {appeal:"2",appeal_reason:"2",time:'2007.06.30 12:08:55',state:1,id:2}
  const Appeal3 = {appeal:"3",appeal_reason:"3",time:'2007.06.30 12:08:55',state:0,id:3}
  const AppealTest =[Appeal1,Appeal2,Appeal3]   //测试使用
  const selectedId = ref(); 
  let Appeals = <any>ref([]);//获取的数据
  let Excuses = <any>ref([]);//理由库获取的数据
  const newExcuse =ref('');
  const Excuse = ref('');
  const ExcuseId = ref();

  
  
  const onClickExcuse =()=>{
   const findLabel = ()=>{
   for (let i = 0 ; i<Excuses.length ; i++) {
   if(Excuses[i].value === ExcuseId.value) {
   Excuse.value = Excuses[i].label;
    }
   }
  }
   findLabel();
   message.value = Excuse.value;
  }//理由库的使用

  const ExcuseGet = async()=>{
    const res = await getExcuseAPI({
    account:account
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
    const list = await getAppeals();
    Appeals.value = list.data;
  }  
  //Update1是通过申诉

  const onClickUpdate2 = async()=>{
    const res = await updateAPI({
     id:selectedId.value,
     advice:advice.value,
     message:message.value,
     state:2,
    });
    console.log(res);
    const list = await getAppeals();
    Appeals.value = list.data;
  }
  //Update2是驳回申诉

  const onClickDelete = async(id:number) =>{
    const res = await deleteAPI({
     id:id
     });
    console.log(res);
    const list = await getAppeals();
    Appeals.value = list.data;
   } 


   

  const getAppeals = async () =>{
    const res = await getAPI({
      account:account
    });
    console.log(res);
    console.log("获取申诉数据成功"); 
    return res.data;
  }



onMounted(
  async ()=>{
  const res = await getAppeals();
  Appeals.value = res.data;
  const res2 = await getExcuseAPI();
  Excuses.value = res2.data;
})

</script>
 
<template>

  
  <n-layout id="layout1">
     <h1 id="Examine">审批申诉</h1>
  <n-space>
        <n-space vertical>    
        <h2>申诉栏</h2>
        <n-table>
           <thead>
             <tr>
             <th>申诉序号</th>
             <th>申诉内容</th>
             <th>申诉原因</th>
             <th>申诉时间</th>
             <th>审批状态</th>
             <th>审批理由</th>
             <th>审批建议</th>
             <th></th>
             </tr>
           </thead>
           <tbody>
             <tr v-for="Appeal in Appeals">
               <td>{{ Appeal.id }}</td>
               <td>{{ Appeal.appeal }}</td>
               <td>{{ Appeal.appeal_reason }}</td>
               <td>{{ Appeal.time }}</td>
               <td>{{ Appeal.state }}</td>
               <td>{{ Appeal.advice }}</td>
               <td>{{ Appeal.message }}</td>
               <td><n-button size="small" @click="onClickSelect(Appeal.id)">选择</n-button></td>
               <td><n-button size="small" v-if="Appeal.state!==0" @click="onClickDelete(Appeal.id)">撤回</n-button></td>
              </tr>
           </tbody>
         </n-table>
         </n-space>

     
       <n-space vertical>
          <h2>审批栏</h2>
          <n-space>
            <n-input disabled placeholder="选中的申诉序号:" id="h2"></n-input>
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
        <n-select vertical placeholder="选择理由" :options="Excuses"  v-model:value="ExcuseId" 
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