<template>
  <n-menu :options="menuOptions"/>
</template>

<script setup lang="ts">

import { h, Component, defineComponent } from 'vue'
import { NMenu,NIcon} from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  Pencil as PencilIcon,
  Help as HelpIcon,
  ExitOutline as ExitIcon,
  ChatbubbleEllipsesOutline as ChatGroundIcon,
  HandLeftOutline as ComplaintsIcon,
  ReaderOutline as QueryIcon,
  MailOutline as MailBoxIcon
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
            name: 'Query',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '综测成绩查询' }
      ),
    key: 'Query',
    icon: renderIcon(QueryIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'ChatGround1',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '话题广场' }
      ),
    key: 'ChatGround1',
    icon: renderIcon(ChatGroundIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'MailBox',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '建议箱' }
      ),
    key: 'MailBox',
    icon: renderIcon(MailBoxIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Change1',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '修改密码' }
      ),
    key: 'Change-Password',
    icon: renderIcon(PencilIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Complaints',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '申诉' }
      ),
    key: 'Complaints',
    icon: renderIcon(ComplaintsIcon),
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
  {
    label: '待定',
    key: 'undefined',
    icon: renderIcon(HelpIcon),
    disabled: true,
  },
  {
    label: '待定',
    key: 'undefined',
    disabled: true,
    icon: renderIcon(HelpIcon),
  }
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

