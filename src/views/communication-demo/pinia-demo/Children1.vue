<template>
  <div>
    <h2>Children 1</h2>
    <p>Shared Message: {{ demoStore.message }}</p>
    <input v-model="childMessage" placeholder="Update message" />
    <button @click="updateMessage">Update Message in Store</button>
  </div>
</template>

<script lang="ts" setup>
import { useDemoStore } from "@/store/modules/demo-store"
import { ref } from "vue"

const demoStore = useDemoStore()
const childMessage = ref("")

const updateMessage = () => {
  demoStore.setMessage(childMessage.value) // 调用 action 更新 Store
}
</script>
