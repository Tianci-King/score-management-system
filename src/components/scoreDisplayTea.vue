<template>
  <n-data-table
      v-if="!flash"
      :bordered="true"
      :data="data"
      :pagination="false"
      :columns="columns"
  ></n-data-table>
  <n-button  @click="sendChange">提交修改</n-button>
</template>

<script setup lang="ts">
import {Score} from "../types/score";
import {itemMsg} from "../constants/itemMsg";
import {computed, ref,h} from "vue";
import {NInput} from "naive-ui";
import teacherService from "../apis/teacherServeice";

const props = defineProps({
  "res": []
})
const resScore = ref();
const columns = [
  {
    title: "得分项",
    key: "name",
  },
  {
    title: "分数",
    key: "grade",
    render (item,index) {
      return h(NInput,{
           value: item.grade,
           onUpdateValue (v) {
             let maxNum = itemMsg[getName(item.name)].limit;
             if(parseInt(v) > maxNum) alert("超出上限!");
             flash.value = true;
             data.value[index].grade = Math.min(maxNum,parseInt(v));
             flash.value = false;
           }
      })
    }
  }
];
const data = ref(getData(props.res));
const flash = ref<Boolean>(false);

function getData(res: object): Score[]{
  let ansArr: Score[] = [];
  resScore.value = res.score;
  for(let item in resScore.value){
    if(item.length <= 3 && item !== "id" && isPower(itemMsg[item].module,res)){
      ansArr.push({
        name: itemMsg[item].name.toString(),
        grade: res.score[item]
      })
    }
  }
  return ansArr
}

function isPower(num: number,res: object){
  let tmp: string = "power"+num.toString();
  return res[tmp];
}

async function sendChange() {
  let score = props.res.score;

    console.log(score);
    for(let i in data.value){
       score[getName(data.value[i].name)] = parseInt(data.value[i].grade);
    }
    console.log(score);
    //FIXME: 这里两个log输出都是一样的 并不是进行修改的for循环没有用，应该是js执行顺序的问题

    const res =  await teacherService.postScore(score);
    if(res.data.msg === "OK")
      alert("提交成功!");
    else alert(res.data.msg);
}

function getName(name: string) {
  for(let item in itemMsg){
    if(itemMsg[item].name === name)
      return item;
  }
}

</script>

<style scoped>

</style>