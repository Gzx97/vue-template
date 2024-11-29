<template>
  <div>
    父组件childInput： {{ childInput }} <br />
    父组件current： {{ current }}
    <Children1 :onChildrenClick="onChildrenClick" @inputChange="handleInputChange" ref="childRef" />
    <button @click="getChild">触发子组件方法</button>
  </div>
</template>

<script lang="ts" setup>
import Children1 from "./Children1.vue"
import { ref } from "vue"
const current = ref<string>("")
const childInput = ref<string>("")
const childRef = ref<InstanceType<typeof Children1> | null>()
// 子组件使用defineEmits把方法传递给父组件
const handleInputChange = (newValue: string) => {
  childInput.value = newValue
}
// 子组件使用defineProps获取父组件传递过来的方法
const onChildrenClick = (value: string) => {
  current.value = value
}
// 子组件使用defineExpose把方法暴露给父组件
const getChild = () => {
  childRef.value?.doSomething("随便传值！")
}
</script>
