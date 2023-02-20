<template>
  <n-card
     :bordered="false"
    >
    <template #header-extra>
      {{commentData.time}}
    </template>
    <div v-if="!onEdit">
      {{commentData.message}}
    </div>
    <n-input v-else v-model:value="commentData.message"/>
    <div class="button" v-if="isMine || identify === 'admin'">
      <n-button  type="info" @click="edit" >
        {{onEdit? "完成编辑" : "编辑"}}
      </n-button>
      <n-button  type="error" @click="deleteComment">
        删除
      </n-button>
    </div>
  </n-card>
</template>

<script lang="ts" setup>
import {computed, ref} from "vue";
import cookieStore from "../stores/cookieStore";
import commentService from "../apis/commentService";

const cookie = cookieStore();
const onEdit = ref<Boolean>(false);
const props = defineProps({
  'data': Object
});
const emit = defineEmits(['change']);
const pinia = cookieStore();
const identify = pinia.identity;
function edit() {
  if(onEdit.value === false) {
    onEdit.value = true;
  }
  else {
    commentService.changeComment({
      id: parseInt(commentData.value.id),
      count: commentData.value.count,
      message: commentData.value.message
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

function deleteComment() {
  commentService.deleComment({
    id: parseInt(commentData.value.id),
  }).then((res) => {
    if(res.data.msg === "OK") {
      alert("删除成功!");
    }
    else {
      alert(res.data.msg);
    }
  })
  emit('change');
}

const commentData = computed(() => {
  return props.data;
})
const isMine = computed(() => {
   return commentData.value.count.toString() === cookie.account || cookie.account.toString() === "00000000";
})
</script>

<style scoped>

</style>