<script setup lang="ts">
  import { NSpace,NLayout,NInput,NSwitch,NButton,NIcon,NCard,NList,NListItem,NTag,NThing,NAvatar,NModal } from 'naive-ui'
  import {computed, onMounted, ref,h} from "vue";
  import cookieStore from "../stores/cookieStore";
  import postService from "../apis/postService"
  import Post from "./post.vue";
  import { ArrowBackOutline, ArrowForwardOutline,CloudOutline } from '@vicons/ionicons5'

  const accountStore = cookieStore();
  const postList = ref();
  const title = ref();
  const message = ref();
  const cookie = cookieStore();
  const showMine = ref(false);
  const showModal = ref(false);

  function getPostItem() {
    postService.getPosts({
      count: accountStore.account,
      mine: 0
    }).then((res) => {
      console.log(res.data);
      if(res.data.msg === "OK") {
        postList.value = res.data.data;
        console.log("更新了postList")
      }
      else
        alert(res.data.msg);
    });

  }


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
         getPostItem();
       }
       else
         alert(res.data.msg)
     }).catch((e) => {
       console.log(e);
     })
     getPostItem();
  }

  const filteredPostList = computed(() => {
    console.log("更新了filter");
    return showMine.value ? postList.value.filter((post: object) => {
      console.log("s")
      return post.count.toString() === cookie.account;
    }) : postList.value
  })


  



  onMounted(() => {
    getPostItem();
  })
</script>

<template>
<n-space>
  <n-layout>

  <n-card id="chatGround">

  
   <h1 id="h">话题广场</h1>
   
      <n-space vertical >
      <n-card  :bordered="false" >
      <n-space vertical id="input">
      <n-input v-model:value="title" placeholder="输入标题"/>
      <n-input v-model:value="message" placeholder="输入内容" type="textarea" clearable/>
      </n-space>
      </n-card>
      </n-space>
      <n-space space-around>
       <n-card id="button" >
      <n-button type="success" @click="sendPost">发送帖子</n-button>
      <n-switch v-model:value="showMine" id="switch">
        <template #checked>
          只显示自己发布的内容
        </template>
        <template #unchecked>
          显示所有内容
        </template>
      </n-switch>
      </n-card>
      <n-card id="xize">
       <n-button  @click="showModal = true" type="success">查看加分细则</n-button>
      </n-card>
      </n-space>
  </n-card>

  <n-modal v-model:show="showModal">
    <n-card
      style="width: 600px"
      title="加分细则查询页面"
      :bordered="false"
      size="huge"
      role="dialog"
      aria-modal="true"
    >
      <n-thing  content-style="margin-top: 10px;" >
        <template #description>
          <n-space size="small" style="margin-top: 4px">
            <n-tag :bordered="false"  type="success" size="large">
              加分细则：
              <template #avatar>
               <n-avatar
                src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
               />
               </template>
            </n-tag>
          </n-space>
        </template>
        1:分差不低于0.5<br>
        2:分数登记不超过三天<br>
        3:申报分数需要文件上传辅助证明<br>
      </n-thing>
      <template #footer>
        <n-thing  content-style="margin-top: 10px;" >
        <template #description>
          <n-space size="small" style="margin-top: 4px">
            <n-tag :bordered="false" type="success" size="large">
              可申请项：
               <template #avatar>
               <n-avatar
                src="https://cdnimg103.lizhi.fm/user/2017/02/04/2583325032200238082_160x160.jpg"
               />
               </template>
            </n-tag>
          </n-space>
        </template>
        1:德育素质<br>
        2:智育素质<br>
        3:体育素质<br>
        4:劳育素质<br>
        5:创新与实践素质
      </n-thing>
      </template>
    </n-card>
  </n-modal>


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
top: 100px;
position: fixed;
left: 20%;
right: 0px;
background-color: white;
}


#switch{
position: relative;
top: 5px;
left: 12px;
}

#chatGround{
position: relative;
width: 80%;

}

#h{
position: relative;
left: 40%;
}

#button{
position: relative;
left: 8%;
text-align:center
}

#xize{
  position: relative;
  left:80%;
}


</style>