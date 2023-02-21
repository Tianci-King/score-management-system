<script setup lang="ts">
  import "../style/bootstrap.min.css"
  import {NLayout,NSpace,NLayoutHeader,NButton,NIcon} from 'naive-ui';
  import {
    PersonOutline as PersonIcon,
    KeyOutline as KeyIcon
   } from '@vicons/ionicons5';

   import { defineComponent, ref, watch, toRaw } from "vue";
   import { useRoute } from "vue-router";

   let router = useRoute();
   let routerPath = router.path;
   let str = routerPath.substring(1);
   let routerPathFrontNumber = str.indexOf("/");
   const routerPathFront = str.substring(0,routerPathFrontNumber);


</script>

  <template>
    <n-space vertical size="large">
      <n-layout>
        <n-layout-header> 

          <n-icon size="30" id="person-icon">
             <person-icon />
          </n-icon>

          <p id="Title1">用户页面</p>

          <n-icon size="30" id="key-icon">
             <key-icon />
          </n-icon>
          

          <a id="Title2" :href="'/'+routerPathFront+'/Change'" class=" text-white nav-link">修改密码</a>

          <svg xmlns="http://www.w3.org/2000/svg" style="display: none;">
            <symbol id="home" viewBox="0 0 16 16">
              <path
                d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4.5a.5.5 0 0 0 .5-.5v-4h2v4a.5.5 0 0 0 .5.5H14a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146zM2.5 14V7.707l5.5-5.5 5.5 5.5V14H10v-4a.5.5 0 0 0-.5-.5h-3a.5.5 0 0 0-.5.5v4H2.5z" />
            </symbol>
            <symbol id="grid" viewBox="0 0 16 16">
              <path
                d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
            </symbol>
            <symbol id="table" viewBox="0 0 16 16">
              <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
              <path fill-rule="evenodd"
                d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z" />
            </symbol>
            <symbol id="people-circle" viewBox="0 0 16 16">
              <path
                d="M0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm15 2h-4v3h4V4zm0 4h-4v3h4V8zm0 4h-4v3h3a1 1 0 0 0 1-1v-2zm-5 3v-3H6v3h4zm-5 0v-3H1v2a1 1 0 0 0 1 1h3zm-4-4h4V8H1v3zm0-4h4V4H1v3zm5-3v3h4V4H6zm4 4H6v3h4V8z" />
            </symbol>
          </svg>

          <ul class="nav col-12 col-lg-auto my-2 justify-content-center my-md-0 text-small">
            <li>
              <a href="'/'+routerPathFront" class="nav-link text-white">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#home" />
                </svg>
                首页
              </a>
            </li>
            <li>
              <a href="'/'+routerPathFront+''" class="nav-link text-secondary">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#table" />
                </svg>
                综测成绩
              </a>
            </li>
            <li>
              <a href="'/'+routerPathFront+'/ChatGround'" class="nav-link text-white">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#grid" />
                </svg>
                话题广场
              </a>
            </li>
            <li>
              <a href="/user" class="nav-link text-white">
                <svg class="bi d-block mx-auto mb-1" width="24" height="24">
                  <use xlink:href="#people-circle" />
                </svg>
                意见反馈
              </a>
            </li>
          </ul>

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
  </style>
