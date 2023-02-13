<script setup lang="ts">
  import { NSpace,NLayout,NButton,NTable} from 'naive-ui'
  


</script>
 
<template>
<n-space>
  <n-layout>
   <h1 id="Examine">审批申报</h1>
   <n-space vertical>    
     <h2>申报栏</h2>
      <n-table>
          <thead>
            <tr>
            <th>标题</th>
            <th>内容</th>
            <th></th>
            <th></th>
            </tr>
          </thead>

          <tbody>
            
            
          </tbody>
      </n-table>
   </n-space>
  </n-layout>
</n-space>
</template>

<style scoped>
.n-layout{
height:100%;
width: 400px;
top: 80px;
position: absolute;
left: 12%;
right: 0px;
background-color: white;
}
</style>