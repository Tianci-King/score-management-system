<template>
  <n-menu :options="menuOptions"/>
</template>

<script setup lang="ts">
import { h, Component, defineComponent } from 'vue'
import { NMenu,NIcon} from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  ExitOutline as ExitIcon,
  HandLeftOutline as ComplaintsIcon, 
  ChatbubbleEllipsesOutline as ChatGroundIcon,
  Pencil as PencilIcon,
} from '@vicons/ionicons5'
import { RouterLink } from 'vue-router'

function renderIcon (icon: Component) {
  return () => h(NIcon, null, { default: () => h(icon) })
}

const menuOptions: MenuOption[] = [
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                name: 'adminTea',
                params: {
                  lang: 'zh-CN'
                }
              }
            },
            { default: () => '管理辅导员' }
        ),
    key: 'adminTea',
    icon: renderIcon(ComplaintsIcon),
  },
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                name: 'adminStu',
                params: {
                  lang: 'zh-CN'
                }
              }
            },
            { default: () => '管理学生' }
        ),
    key: 'adminStu',
    icon: renderIcon(ComplaintsIcon),
  },
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                name: 'ChatGround3',
                params: {
                  lang: 'zh-CN'
                }
              }
            },
            { default: () => '话题广场' }
        ),
    key: 'adminChat',
    icon: renderIcon(ChatGroundIcon),
  },
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                name: 'Change3',
                params: {
                  lang: 'zh-CN'
                }
              }
            },
            { default: () => '修改密码' }
        ),
    key: 'changePwd',
    icon: renderIcon(PencilIcon),
  },
  {
    label: () =>
        h(
            RouterLink,
            {
              to: {
                name: 'Login',
                params: {
                  lang: 'zh-CN'
                }
              }
            },
            { default: () => '注销' }
        ),
    key: 'Login',
    icon: renderIcon(ExitIcon),
  },
]

</script>

<style scoped>
.n-menu{
  background-color: white;
  height:100%;
  position: fixed;
  width:12%;
  left: 0%;
  top:80px;
}
</style>

