<template>
  <div>
    <h1>Parent Component</h1>
    <p>Message: {{ message }}</p>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
    <input v-model="newMessage" placeholder="Set new message" />
    <button @click="updateMessage">Set Message</button>
    <hr />
    <Children1 />
    <Children2 />
  </div>
</template>

<script lang="ts" setup>
import { ref, onMounted, onUnmounted } from "vue"
import Children1 from "./Children1.vue"
import Children2 from "./Children2.vue"
import { eventBus } from "@/utils/emitter"

const message = ref("")
const count = ref(0)
const newMessage = ref("")

// 监听事件
const handleUpdateMessage = (msg: string) => {
  message.value = msg
}

const handleIncrement = () => {
  count.value++
}

const handleDecrement = () => {
  count.value--
}

// 广播事件
const increment = () => eventBus.emit("increment")
const decrement = () => eventBus.emit("decrement")
const updateMessage = () => eventBus.emit("updateMessage", newMessage.value)

// 生命周期钩子
onMounted(() => {
  eventBus.on("updateMessage", handleUpdateMessage)
  eventBus.on("increment", handleIncrement)
  eventBus.on("decrement", handleDecrement)
})

onUnmounted(() => {
  eventBus.off("updateMessage", handleUpdateMessage)
  eventBus.off("increment", handleIncrement)
  eventBus.off("decrement", handleDecrement)
})
</script>
