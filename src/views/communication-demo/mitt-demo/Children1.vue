<template>
  <div>
    <h2>Children 1</h2>
    <p>Message: {{ message }}</p>
    <input v-model="childMessage" placeholder="Update message" />
    <button @click="updateMessage">Update Message</button>
  </div>
</template>

<script lang="ts" setup>
import { eventBus } from "@/utils/emitter"
import { ref, onMounted, onUnmounted } from "vue"

const message = ref("")
const childMessage = ref("")

// 监听事件
const handleUpdateMessage = (msg: string) => {
  message.value = msg
}

// 广播事件
const updateMessage = () => {
  eventBus.emit("updateMessage", childMessage.value)
}

// 生命周期钩子
onMounted(() => {
  eventBus.on("updateMessage", handleUpdateMessage)
})

onUnmounted(() => {
  eventBus.off("updateMessage", handleUpdateMessage)
})
</script>
