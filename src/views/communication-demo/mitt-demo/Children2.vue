<template>
  <div>
    <h2>Children 2</h2>
    <p>Count: {{ count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script lang="ts" setup>
import { eventBus } from "@/utils/emitter"
import { ref, onMounted, onUnmounted } from "vue"

const count = ref(0)

// 监听事件
const handleIncrement = () => {
  count.value++
}

const handleDecrement = () => {
  count.value--
}

// 广播事件
const increment = () => {
  eventBus.emit("increment")
}

const decrement = () => {
  eventBus.emit("decrement")
}

// 生命周期钩子
onMounted(() => {
  eventBus.on("increment", handleIncrement)
  eventBus.on("decrement", handleDecrement)
})

onUnmounted(() => {
  eventBus.off("increment", handleIncrement)
  eventBus.off("decrement", handleDecrement)
})
</script>
