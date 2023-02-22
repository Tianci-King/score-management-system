<script setup lang="ts">
  import { NSpace,NLayout,NCard,NButton } from 'naive-ui'
  import {ref} from "vue";
  import changePwd from "../apis/utils/changePwd";
  import cookieStore from "../stores/cookieStore";

  const old_password = ref("");
  const new_password1 = ref("");
  const new_password2 = ref("");
  const pinia = cookieStore();
  async function change(){
    if(new_password1.value === new_password2.value){

      const data = {
        "account": pinia.account.toString(),
        "old_password": old_password.value.toString(),
        "new_password": new_password1.value.toString(),
      }
      console.log(data);
      const res = await changePwd(data);

      if(res.data.msg === "OK")
        alert("修改成功！");
      else
        alert(res.data.msg);
    }
    else
      alert("两次密码不同！")
  }
</script>

<template>
<n-space>
  <n-layout>
   <n-card id="card">
   <h1 id="Change">修改密码</h1>
    <div>
      <n-input  round placeholder="老密码"
                class="username" v-model:value="old_password"/>
    </div>
    <div>
      <n-input round placeholder="新密码"
               class="password" v-model:value="new_password1"/>
    </div>
    <div>
      <n-input round placeholder="确认新密码"
               class="password" v-model:value="new_password2"/>
    </div>  
    <n-button class="button1" @click="change">修改</n-button>
    </n-card>
   </n-layout>
  
</n-space>
</template>

<style scoped>
.n-layout{
height:80%;
width: 60%;
top: 80px;
position: absolute;
left: 16%;
right: 0px;
background-color: white;
}
.button1{
   position: relative;
}

#card{
  position: relative;
  width: 30%;
}
</style>