<template>
   <n-card
     :segmented="{
      content: true,
      footer: 'soft'
    }">
     <template #header>
        <div v-if="!onEdit">
          {{postData.title}}
        </div>
       <n-input v-else v-model:value="postData.title"/>
     </template>
     <template #header-extra>
         {{postData.time}}
     </template>
     <div v-if="!onEdit">
       {{postData.message}}
     </div>
     <n-input v-else v-model:value="postData.message"/>
     <div class="button" v-if="isMine">
       <n-button  type="info" @click="edit" >
         {{onEdit? "完成编辑" : "编辑"}}
       </n-button>
       <n-button  type="error" @click="deletePost">
         删除
       </n-button>
     </div>
     <n-button @click="getComment">{{showComment? "收起评论" : "展开评论"}}</n-button>
     <template v-if="showComment" #footer>
         <div v-if="showComment" v-for="comment in commentData">
           <comment :data="comment"/>
         </div>
         <div>
           <n-input v-model:value="msg" placeholder="输入评论内容"/>
           <n-button @click="sendComment" type="success">发送评论</n-button>
         </div>
     </template>
   </n-card>
</template>

<script lang="ts" setup>
import {computed, onMounted, ref} from "vue";
import cookieStore from "../stores/cookieStore";
import postService from "../apis/postService";
import commentService from "../apis/commentService";
import Comment from "./comment.vue";

const showComment = ref<Boolean>(false);
const commentData = ref();
const cookie = cookieStore();
const msg = ref("");
const props = defineProps({
  'data': Object
});
const onEdit = ref<Boolean>(false)

function edit() {
  if(onEdit.value === false) {
    onEdit.value = true;
  }
  else {
   postService.changePost({
      id: parseInt(postData.value.id),
      title: postData.value.title,
      count: postData.value.count,
      message: postData.value.message
    }).then((res) => {
      if(res.data.msg === "OK") {
        alert("修改成功!");
      }
      else
        alert(res.data.msg);
   })
     onEdit.value = false
    }
  }

  function deletePost() {
    postService.delePost({
      id: parseInt(postData.value.id),
    }).then((res) => {
      if(res.data.msg === "OK") {
        alert("删除成功!");
      }
      else {
        alert(res.data.msg);
      }
    })
  }

  function getComment() {
    if (showComment.value === false)
    commentService.getComments({
      id: postData.value.id,
    }).then((res) => {
      if(res.data.msg === "OK") {
        commentData.value = res.data.data;
        showComment.value = true;
      }
      else {
        showComment.value = false
        alert(res.data.msg);

      }
    })
    else
    showComment.value = !showComment.value;
  }

  function sendComment() {
    commentService.postComment({
      id: postData.value.id,
      count: cookie.account,
      message: msg.value,
    }).then((res) => {
      console.log(res.data);
      if(res.data.msg === "OK") {
        alert("发送成功！")
        msg.value = "";
      }
      else
        alert(res.data.msg)
    }).catch((e) => {
      console.log(e);
    })
  }

const postData  = computed(() => {
  return props.data;
});
const isMine = computed(() => {
  return cookie.account.toString() === postData.value.count || cookie.account.toString() === "00000000";
})
</script>

<style scoped>

</style>