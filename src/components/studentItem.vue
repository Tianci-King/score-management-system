<template>
  <n-form
      inline
      :label-width="80"
      :size="'small'"
      :rules="rules"
      :model="formValue"
      v-if="!isDelete"
  >
    <n-form-item label="账号" path="count">
      <n-tag type="success" v-if="!isAdd">{{formValue.account}}</n-tag>
      <n-input v-if="isAdd" v-model:value="formValue.account"/>
    </n-form-item>
    <n-form-item label="match" path="match" v-if="!isAdd">
      <n-input v-model:value="formValue.match" placeholder="输入match" />
    </n-form-item>
    <n-form-item v-if="!isAdd">
      <n-button type="info" @click="putChange">
        提交修改
      </n-button>
      <n-button type="error" @click="deleteStu">
        删除
      </n-button>
    </n-form-item>
    <n-form-item v-if="isAdd">
      <n-button type="success" @click="$emit('add')">
        添加
      </n-button>
    </n-form-item>
  </n-form>
</template>

<script setup lang="ts">
import {computed, onMounted, ref} from "vue";
import adminService from "../apis/adminService";

const props = defineProps({
  'data': Object,
  'isAdd': Boolean,
})

const emit = defineEmits(['del','add','change']);

const isDelete = ref(false);
const rules = {
  count: {
    name: {
      required: false,
      trigger: 'blur'
    },
    match: {
      required: false,
      trigger: ['input', 'blur']
    }
  },
}

function putChange() {
  console.log(formValue.value);
  adminService.changeStudent({
    "account": formValue.value.count,
    "match": formValue.value.match,
  }).then((res) => {
    if (res.data.msg === "OK") {
      alert("修改成功!")
      emit('change');
    }
    else
      alert(res.data.msg);
  })
}

function deleteStu() {
  adminService.deleteStudent({
    account: formValue.value.count,
  }).then((res) => {
    if (res.data.msg === "OK") {
      isDelete.value = true
      emit('change');
      alert("删除成功!")
    }
    else
      alert(res.data.msg);
  })
}
const formValue = computed(() => {
  console.log(props.data);
  return props.data;
})

</script>

<style scoped>

</style>