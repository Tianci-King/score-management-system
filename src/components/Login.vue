<template>
  <div class="title"><h2>综测成绩查询页面</h2></div>

  <n-icon size="30" class="person">
      <PersonIcon></PersonIcon>
    </n-icon>

  <n-icon size="32" class="key">
      <KeyIcon></KeyIcon>
    </n-icon>

  <div>
    <n-input  round placeholder="用户名"
    class="username" v-model:value="account"/>
  </div>
  <div>
    <n-input round placeholder="密码"
    class="password" v-model:value="password"/>
  </div>
  <div>
    <n-button class="button1" @click="login">登录</n-button>
  </div>
  <div>
    <n-button class="button2" @click="cleanText">清空</n-button>
  </div>

</template>


<script setup lang="ts">
import { NInput,NIcon,NButton} from 'naive-ui';
import {
  KeyOutline as KeyIcon,
  PersonOutline as PersonIcon
} from '@vicons/ionicons5';
import {ref} from "vue";
import loginApi from "../apis/login";
import cookieStore from "../stores/cookieStore";
import router from "../routers";

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
    alert("登陆成功")
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
.title{  position: absolute;
  right: 15%;
    width: 20%;
    top:28%;
    font-family: Arial, Helvetica, sans-serif;
}
.username{
    position: absolute;
    right: 20%;
    width: 20%;
    top:36%;
}
.password{
    position: absolute;
    right: 20%;
    width:20%;
    top:42%;
}

.button1{
    position: absolute;
    right: 36%;
    top:48%;
}
.button2{
    position: absolute;
    right: 30%;
    top:48%;
}

.person{
    position: absolute;
    right: 41%;
    top:36%;
}
.key{
    position: absolute;
    right: 41%;
    top:43%;
}
</style>

