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
  NewspaperOutline as ManageIcon,
  ReceiptOutline as ExamineIcon
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
            name: 'Manage',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '成绩管理' }
      ),
    key: 'Manage',
    icon: renderIcon(ManageIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'ExamineAppeal',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '审批申诉' }
      ),
    key: 'ExamineAppeal',
    icon: renderIcon(ExamineIcon),
  },
   {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'ExamineApplication',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '审批申报' }
      ),
    key: 'ExamineApplication',
    icon: renderIcon(ExamineIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'ChatGround2',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '话题广场' }
      ),
    key: 'ChatGround2',
    icon: renderIcon(ChatGroundIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Change2',
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
    label: () =>
        h(
            RouterLink,
            {
              to: {
                name: 'Suggestion',
                params: {
                  lang: 'zh-CN'
                }
              }
            },
            { default: () => '建议箱' }
        ),
    key: 'suggestionGet',
    icon: renderIcon(ExitIcon),
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
    HEAD:src/components/Menu.vue;
    position: fixed;
    width:16%;
    position: absolute;
    width:12%;
    UI:src/components/TeacherMenu.vue;
    left: 0%;
    top:80px;
}
</style>

