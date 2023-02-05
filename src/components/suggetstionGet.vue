<script setup lang="ts">
import { NSpace,NLayout} from 'naive-ui'
import {computed, onMounted, ref} from "vue";
import cookieStore from "../stores/cookieStore";
import teacherService from "../apis/teacherServeice";

const suggestionList = ref();
const accountStore = cookieStore();

function getSuggestion() {
teacherService.getSuggestion({
    account: accountStore.account.toString()
  }).then((res) => {
    console.log(res)
  if (res.data.data !== null)
    suggestionList.value = res.data.data;
  else
    suggestionList.value = undefined;
    console.log(suggestionList.value)
})
}

onMounted(() => {
  getSuggestion()
})

</script>

<template>
  <n-space>
    <n-layout>
      <div v-if="suggestionList !== null" v-for="suggestion in suggestionList">
        <n-card title="{{suggestion.question}}">
          <template>
              {{suggestion.advice}}
            </template>
        </n-card>
      </div>
        <n-card v-if="!suggestionList">
           暂无建议
        </n-card>
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
</style>