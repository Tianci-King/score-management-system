import Login from "../pages/Login.vue";
import Template from "../components/Template.vue";
import Change from "../components/Change.vue";
import Complaints from "../components/Complaints.vue";
import Query from "../components/QuerySu.vue"
import Student from "../pages/Student.vue";
import Teacher from "../pages/Teacher.vue";
import ChatGround from "../components/ChatGround.vue";
import MailBox from "../components/suggestionPost.vue";
import ExamineAppeal from "../components/ExamineAppeal.vue";
import ExamineApplication from "../components/ExamineApplication.vue"
import Manage from "../components/Manage.vue";
import suggestionGet from "../components/suggetstionGet.vue"
import Declare from "../components/Declare.vue"

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
    path: "/Student/Change",
    name: "Change1",
    components: {
      'default': Student,
      'right': Change,
    }
  },
  {
    path: "/Student/Complaints",
    name: "Complaints",
    components: {
      'default': Student,
      'right': Complaints,
    }
  },
  {
    path: "/Student/Declare",
    name: "Declare",
    components: {
      'default': Student,
      'right': Declare,
    }
  },
  {
    path: "/Student/Query",
    name: "Query",
    components: {
      'default': Student,
      'right': Query,
    }
  },
  {
    path: "/Student/ChatGround",
    name: "ChatGround1",
    components: {
      'default': Student,
      'right':ChatGround,
    }
  },                                        
  {
    path: "/Student/MailBox",
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
    path: "/Teacher/Change",
    name: "Change2",
    components: {
      'default': Teacher,
      'right': Change,
    }
  },
  {
    path: "/Teacher/ExamineAppeal",
    name: "ExamineAppeal",
    components: {
      'default': Teacher,
      'right': ExamineAppeal,
    }
  },
  {
    path: "/Teacher/ExamineApplication",
    name: "ExamineApplication",
    components: {
      'default': Teacher,
      'right': ExamineApplication,
    }
  },
  {
    path: "/Teacher/ChatGround",
    name: "ChatGround2",
    components: {
      'default': Teacher,
      'right': ChatGround,
    }
  },
  {
    path: "/Teacher/Manage",
    name: "Manage",
    components: {
      'default': Teacher,
      'right': Manage,
    }
  },
  {
    path: "/Teacher",
    name: "Suggestion",
    components: {
      'default': Teacher,
      'right': suggestionGet,
    }
  },

  //辅导员登陆界面
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router;
