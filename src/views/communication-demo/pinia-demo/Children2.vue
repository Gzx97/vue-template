<template>
  <div>
    <h2>Children 2</h2>
    <p>Shared Count: {{ demoStore.count }}</p>
    <button @click="increment">Increment</button>
    <button @click="decrement">Decrement</button>
  </div>
</template>

<script lang="ts" setup>
import { useDemoStore } from "@/store/modules/demo-store"

const demoStore = useDemoStore()

const increment = () => demoStore.increment()
const decrement = () => demoStore.decrement()
</script>
