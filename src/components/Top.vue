<script setup lang="ts">
  import {NLayout,NSpace,NLayoutHeader,NButton,NIcon} from 'naive-ui';
  import {
    PersonOutline as PersonIcon,
    KeyOutline as KeyIcon
   } from '@vicons/ionicons5';
</script>

  <template>
    <n-space vertical size="large">
      <n-layout>
        <n-layout-header> 

          <n-icon size="30" id="person-icon">
             <person-icon />
          </n-icon>

          <p id="Title">用户页面</p>

          <n-icon size="30" id="key-icon">
             <key-icon />
          </n-icon>

        </n-layout-header>
      </n-layout>
    </n-space>
  </template>
  
  <style scoped>
  .n-layout-header {
    /* background: rgba(128, 128, 128, 0.2); */
    background-color:gainsboro;
    /* padding: 1%; */
    height:80px;
    width:100%;
    position: fixed;
    left: 0px;
    right:0px;
    top:0px;
  }

  #person-icon{
    position:fixed;
    left: 2%;
    top:20px;
  }

  #key-icon{
    position: fixed;
    right:8%;
    top:23px;
  }

  #Title{
    position:fixed;
    left: 4%;
    top:12px;
  }
  </style>
