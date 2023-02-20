<script setup lang="ts">
  import "../style/bootstrap.min.css"
  import {NLayout,NSpace,NLayoutHeader,NButton,NIcon} from 'naive-ui';
  import {
    PersonOutline as PersonIcon,
    KeyOutline as KeyIcon
   } from '@vicons/ionicons5';
  import { defineComponent, ref, watch, toRaw } from "vue";
  import { useRoute } from "vue-router";
  import { Vue2 } from "vue-demi";
  import router from "../routers";
import { storeToRefs } from "pinia";
import cookieStore from "../stores/cookieStore";

   const store = cookieStore();
   const {routername} = storeToRefs(store);
  const func5 = () => {
    router.push('/'+ routername.value + '/Change');
  }
  
</script>

  <template>
    <n-space vertical size="large">
      <n-layout>
        <n-layout-header> 

          <n-icon size="30" id="person-icon">
             <person-icon />
          </n-icon>

          <p id="Title1">用户页面</p>

          <n-icon @click="func5()" size="30" id="key-icon">
             <key-icon />
          </n-icon>
          

          <a id="Title2" @click="func5()" class=" text-white nav-link">修改密码</a>

         

        </n-layout-header>
      </n-layout>
    </n-space>
  </template>
  
  <style scoped>
  .n-layout{
    width: 200px;
  }
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
    position:absolute;
    left: 30px;
    top:15px;
  }

  #key-icon{
    position: fixed;
    right:7.6%;
    top:6px;
  }

  #Title1{
    position:fixed;
    left: 70px;
    top:22px;
  }

  #Title2{
    position: fixed;
    right: 7%;
    top:36px;
  }

  .button {
    outline:none;
    border:none;
  }
  </style>
