<script setup lang="ts">
  import { NSpace,NLayout,NInput,NSwitch,NButton,NIcon } from 'naive-ui'
  import {computed, onMounted, ref} from "vue";
  import cookieStore from "../stores/cookieStore";
  import postService from "../apis/postService"
  import Post from "./post.vue";
  import { ArrowBackOutline, ArrowForwardOutline } from '@vicons/ionicons5'

  const accountStore = cookieStore();
  const postList = ref();
  const title = ref();
  const message = ref();
  const cookie = cookieStore();
  const showMine = ref(false);

  function sendPost() {
     postService.postPost({
       title: title.value,
       message: message.value,
       count: cookie.account.toString()
     }).then((res) => {
       console.log(res.data);
       if(res.data.msg === "OK") {
         alert("发送成功！")
         title.value = "";
         message.value = "";
       }
       else
         alert(res.data.msg)
     }).catch((e) => {
       console.log(e);
     })
     getPostItem();
  }

  const filteredPostList = computed(() => {
    return showMine.value ? postList.value.filter((post: object) => {
      return post.count.toString() === cookie.account;
    }) : postList.value
  })

  function getPostItem() {
    postService.getPosts({
      count: accountStore.account,
      mine: 0
    }).then((res) => {
      console.log(res.data);
      if(res.data.msg === "OK") {
        postList.value = res.data.data;
      }
      else
        alert(res.data.msg);
    });

  }

  onMounted(() => {
    getPostItem();
  })
</script>

<template>
<n-space>
  <n-layout>
   <h1 id="ChatGround">话题广场</h1>
<!--    提交-->

      <n-space vertical id="input">
      <n-input v-model:value="title" placeholder="输入标题"/>
      <n-input v-model:value="message" placeholder="输入内容" type="textarea"/>
      </n-space>
      <n-space space-around>
      <n-button type="success" @click="sendPost">发送帖子</n-button>
      <n-switch v-model:value="showMine" id="switch">
        <template #checked>
          只显示自己发布的内容
        </template>
        <template #unchecked>
          显示所有内容
        </template>
      </n-switch>
      </n-space>



   <div v-for="post in filteredPostList">
     <post :data="post" @change="getPostItem" />
   </div>

  </n-layout>
</n-space>
</template>

<style scoped>
.n-layout{
height:100%;
width: auto;
top: 80px;
position: absolute;
left: 12%;
right: 0px;
background-color: white;
}

#input{
width: 30%;
}

#switch{
position: relative;
top: 5px;
}
</style>