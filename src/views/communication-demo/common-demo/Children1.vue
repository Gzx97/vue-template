<template>
  <div>
    <button
      @click="
        () => {
          props.onChildrenClick(inputValue)
        }
      "
    >
      子组件1按钮
    </button>

    <el-input v-model="inputValue" style="width: 240px" placeholder="Please input" @input="handleInput" />
  </div>
</template>

<script lang="ts" setup>
import { ref, defineProps } from "vue"
interface Props {
  onChildrenClick: (value: any) => void
}
interface Emits {
  (e: "inputChange", value: string): void
}
const props = defineProps<Props>()
const emit = defineEmits<Emits>()
const inputValue = ref("")

const handleInput = (value: string) => {
  emit("inputChange", value)
}
const doSomething = (value: string) => {
  console.log("子组件执行" + value)
}
defineExpose({ doSomething })
</script>
