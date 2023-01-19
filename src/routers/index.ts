import Login from "../pages/Login.vue";
import Template from "../components/Template.vue";
import Change from "../components/Change.vue";
import Complaints from "../components/Complaints.vue";
import Query from "../components/Query.vue"
import Student from "../pages/Student.vue";
import Teacher from "../pages/Teacher.vue";
import ChatGround from "../components/ChatGround.vue";
import MailBox from "../components/MailBox.vue";
import Examine from "../components/Examine.vue";
import Manage from "../components/Manage.vue";

import { createRouter, createWebHistory } from "vue-router";

const routes = [
  {
    path: "/",
    redirect: "/Login"
  },
  //默认路由为登陆界面
  {
    path: "/Login",
    name: "Login",
    component: Login
  },
  //登录界面
  {
    path: "/Student",
    name: "Layout1",
    components: {
      'default': Student,
      'right': Template,
    }
  },
  {
    path: "/Student",
    name: "Change1",
    components: {
      'default': Student,
      'right': Change,
    }
  },
  {
    path: "/Student",
    name: "Complaints",
    components: {
      'default': Student,
      'right': Complaints,
    }
  },
  {
    path: "/Student",
    name: "Query",
    components: {
      'default': Student,
      'right': Query,
    }
  },
  {
    path: "/Student",
    name: "ChatGround1",
    components: {
      'default': Student,
      'right':ChatGround,
    }
  },                                        
  {
    path: "/Student",
    name: "MailBox",
    components: {
      'default': Student,
      'right':MailBox,
    }
  },                                        
  
  //学生用户界面

  {
    path: "/Teacher",
    name: "Layout2",
    components: {
      'default': Teacher,
      'right': Template,
    }
  },
  {
    path: "/Teacher",
    name: "Change2",
    components: {
      'default': Teacher,
      'right': Change,
    }
  },
  {
    path: "/Teacher",
    name: "Examine",
    components: {
      'default': Teacher,
      'right': Examine,
    }
  },
  {
    path: "/Teacher",
    name: "ChatGround2",
    components: {
      'default': Teacher,
      'right': ChatGround,
    }
  },
  {
    path: "/Teacher",
    name: "Manage",
    components: {
      'default': Teacher,
      'right': Manage,
    }
  }
  //辅导员登陆界面
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
