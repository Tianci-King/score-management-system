<template>
  <n-data-table
      :bordered="true"
      :data="data"
      :pagination="false"
      :columns="columns"
  ></n-data-table>
  <n-gradient-text type="success">
    总综测分 : {{total}}
  </n-gradient-text>
</template>

<script setup lang="ts">
import {Score} from "../types/score";
import {itemMsg} from "../constants/itemMsg";
import {computed, ref} from "vue";
  const props = defineProps({
    "score": []
  })
  const columns = [
    {
      title: "得分项",
      key: "name",
    },
    {
      title: "分数",
      key: "grade",
    }
  ];
function getData(res: object): Score[]{
  let ansArr: Score[] = [];
  for(let item in res){
    if(item.length <= 3 && item !== "id"){
      ansArr.push({
        name: itemMsg[item].name.toString(),
        grade: res[item]
      })
    }
  }
  console.log(ansArr);
  return ansArr
}

const data = computed(() => {
   return getData(props.score);
});
const total = computed(() => {
  return props.score.total;
})
</script>

<style scoped>

</style>