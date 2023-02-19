<template>
  <n-space>
  <n-layout id="layout1"> 

   <h3 class="title">综测成绩查询页面</h3>

   <n-space vertical>  
     <n-space space-around>  
     <n-icon size="30" class="person">
       <PersonIcon></PersonIcon>
     </n-icon>
     <n-input  round placeholder="用户名"
     class="username" v-model:value="account"/>
     </n-space>
   
     <n-space space-around>   
     <n-icon size="32" class="key">
       <KeyIcon></KeyIcon>
     </n-icon>

     <n-input round placeholder="密码"
     class="password" v-model:value="password"/>
     </n-space>
 
   </n-space>

   <n-space space-around> 
    <n-button class="button1" @click="login">登录</n-button>
    <n-button class="button2" @click="cleanText">清空</n-button>
   </n-space>
    

  </n-layout>
 </n-space>
</template>


<script setup lang="ts">
import { NInput,NIcon,NButton,NSpace,NLayout} from 'naive-ui';
import {
  KeyOutline as KeyIcon,
  PersonOutline as PersonIcon
} from '@vicons/ionicons5';
import {ref} from "vue";
import loginApi from "../apis/utils/login";
import cookieStore from "../stores/cookieStore";
import router from "../routers";
import { storeToRefs } from 'pinia';

const account = ref("");
const password = ref("");
const piniaCookie = cookieStore();

async function login(){
  console.log(import.meta.env.VITE_BASE_URL);
  console.log(password.value);
   const res = await loginApi(JSON.stringify({
     "password": password.value.toString(),
     "account": account.value.toString(),
   }));

  if (res.data.msg === "OK" ){

    console.log(res);
    piniaCookie.cookieIs(account.value);
    piniaCookie.timeIs(res.data.data.start_time,res.data.data.end_time);
    alert("登陆成功");
    await router.push(res.data.data.identity.toString());
  }
  else {
    console.log(res);
    alert(res.data.msg);
  }
}

function cleanText(){
  account.value="";
  password.value="";
}

</script>


<style scoped>
#layout1{
  top: 20%;
  left: 30%;
  width: 500px;
  height: 500px;
  background-color: white;
  position: absolute;
}

.Title{
  position: relative;
}

.button1{
  position: relative;
  top: 3px;
  left: 45px;
}

.button2{
  position: relative;
  top: 3px;
  left: 45px;
}

</style>

