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
import {NButton} from "naive-ui";
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
      if (containsNumber(getName(item.name)))
      return h(NInput,{
           value: item.grade.toString(),
           onUpdateValue (v: string) {
             if (v === "") v = "0";
             data.value[index].grade = v;
           },
           onBlur () {
             let maxNum = parseFloat(itemMsg[getName(item.name)].limit);
             console.log("max" + maxNum);
             if(parseFloat(data.value[index].grade) > maxNum) alert("超出上限!");
             data.value[index].grade = Math.min(maxNum,parseFloat(data.value[index].grade));
             let len = getName(item.name).length;
             let i = index,j = index,sum = 0.0;
             while(containsNumber(getName(data.value[i].name))) i--;
             while(containsNumber(getName(data.value[j].name))) j++;
             console.log(i,j);
             for(let k = i + 1 ; k < j ; k ++  ){
               sum += parseFloat(data.value[k].grade);
               console.log(sum);
             }
             if(len === 2)
             data.value[i].grade = sum.toString();
           }
      })
      else
        return h(NInput,{
            value: item.grade,
            disabled: true,
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
       score[getName(data.value[i].name)] = parseFloat(data.value[i].grade);
    }
    console.log(score);
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
function containsNumber(str: string) {
  const reg=/\d/;
  return reg.test(str);
}

</script>

<style scoped>

</style>