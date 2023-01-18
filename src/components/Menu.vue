<template>
  <n-menu :options="menuOptions"/>
</template>

<script setup lang="ts">

import { h, Component, defineComponent } from 'vue'
import { NMenu,NIcon} from 'naive-ui'
import type { MenuOption } from 'naive-ui'
import {
  PencilOutline as PencilIcon,
  Help as HelpIcon,
  AlarmOutline as AlarmIcon,
  HomeOutline as HomeIcon
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
            name: 'Login',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '注销' }
      ),
    key: 'Home',
    icon: renderIcon(HomeIcon),
  },
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
    icon: renderIcon(PencilIcon),
  },
  {
    label: () =>
      h(
        RouterLink,
        {
          to: {
            name: 'Change',
            params: {
              lang: 'zh-CN'
            }
          }
        },
        { default: () => '修改密码' }
      ),
    key: 'Change-Password',
    icon: renderIcon(AlarmIcon),
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
    icon: renderIcon(AlarmIcon),
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

