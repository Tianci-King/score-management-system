<script setup lang="ts">
import { NSpace,NLayout,NCard } from 'naive-ui'
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
const bordered = true;
const hoverable = true;
</script>

<template>
  <n-space>
    <n-layout>
      <div v-if="suggestionList !== null" v-for="suggestion in suggestionList">
        
        <n-card id="card"
            size="huge"
            :bordered="bordered"
            :hoverable="hoverable"
        >
          <template #header>
              建议主题：{{suggestion.question}}
          </template>
          <template #action>
              建议内容：{{suggestion.anonymity? "匿名用户" : suggestion.account}}说 : {{suggestion.advice}}
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

#card{
  width: 80%;
  position: relative;
}
</style>