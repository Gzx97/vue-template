<template>
  <div>
    <h1>Parent Component</h1>
    <p>Message from Store: {{ demoStore.message }}</p>
    <p>Count from Store: {{ demoStore.count }}</p>
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
import { ref } from "vue"
import Children1 from "./Children1.vue"
import Children2 from "./Children2.vue"
import { useDemoStore } from "@/store/modules/demo-store"

const demoStore = useDemoStore()
const newMessage = ref("")

const increment = () => demoStore.increment()
const decrement = () => demoStore.decrement()
const updateMessage = () => {
  demoStore.setMessage(newMessage.value) // 确保调用 Pinia 的 action
}
</script>
