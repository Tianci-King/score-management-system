<template>
  <n-form
    inline
    :label-width="40"
    :size="'small'"
    :rules="rules"
    :model="formValue"
     v-if="!isDelete"
  >
    <n-form-item label="账号" path="count">
      <n-tag type="success" v-if="!isAdd">{{formValue.count}}</n-tag>
      <n-input v-if="isAdd" v-model:value="formValue.count"/>
    </n-form-item>
    <n-form-item label="match" path="match">
      <n-input v-model:value="formValue.match" placeholder="输入match" />
    </n-form-item>
    <n-form-item label="德育素质" path="power1">
      <n-switch v-model:value="formValue.power1"  />
    </n-form-item>
    <n-form-item label="智育素质" path="power2">
      <n-switch v-model:value="formValue.power2"  />
    </n-form-item>
    <n-form-item label="体育素质" path="power3">
      <n-switch v-model:value="formValue.power3"  />
    </n-form-item>
    <n-form-item label="美育素质" path="power4">
      <n-switch v-model:value="formValue.power4"  />
    </n-form-item>
    <n-form-item label="劳育素质" path="power5">
      <n-switch v-model:value="formValue.power5"  />
    </n-form-item>
    <n-form-item label="创新与实践素质" path="power6">
      <n-switch v-model:value="formValue.power6"  />
    </n-form-item>
    <n-form-item v-if="!isAdd">
      <n-button type="info" @click="putChange">
        提交修改
      </n-button>
      <n-button type="error" @click="deleteTea">
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
import {computed, ref} from "vue";
import adminService from "../apis/adminService";

const props = defineProps({
  'data': Object,
  'isAdd': Boolean,
})

const emit = defineEmits(['del','add']);

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
  power1: {
    required: false,
        message: '',
        trigger: ['input']
  },
  power2: {
    required: false,
    message: '',
    trigger: ['input']
  },
  power3: {
    required: false,
    message: '',
    trigger: ['input']
  },
  power4: {
    required: false,
    message: '',
    trigger: ['input']
  },
  power5: {
    required: false,
    message: '',
    trigger: ['input']
  },
  power6: {
    required: false,
    message: '',
    trigger: ['input']
  },
}

function putChange() {
  console.log(formValue.value);
  adminService.changeTeacher({
    "count": formValue.value.count,
    "match": formValue.value.match,
    "power1": formValue.value.power1? 1 : 0,
    "power2": formValue.value.power2? 1 : 0,
    "power3": formValue.value.power3? 1 : 0,
    "power4": formValue.value.power4? 1 : 0,
    "power5": formValue.value.power5? 1 : 0,
    "power6": formValue.value.power6? 1 : 0,
  }).then((res) => {
    if (res.data.msg === "OK")
      alert("修改成功!")
    else
      alert(res.data.msg);
  })
}

function deleteTea() {
  adminService.deleteTeacher({
    account: formValue.value.count,
  }).then((res) => {
    if (res.data.msg === "OK") {
      isDelete.value = true
      alert("删除成功!")
    }
    else
      alert(res.data.msg);
  })
}

const formValue = computed(() => {
  return switchData(props.data);
})

function switchData(data) {
  const tmpData = data;
  for(let i=1;i<=6;i++){
    const tmp = "power"+i;
    tmpData[tmp] = data[tmp]? true : false;
  }
  return tmpData;
}
</script>

<style scoped>

</style>