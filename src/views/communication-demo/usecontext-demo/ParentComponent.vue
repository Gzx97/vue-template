<template>
  <div>
    <h1>Parent Component</h1>
    <p>Count: {{ count }}</p>
    <Children1 />
    <Children2 />
  </div>
</template>

<script lang="ts" setup>
import { ref, provide } from "vue"
import { MyContext, MyContextKey } from "./types/myContext"
import Children1 from "./Children1.vue"
import Children2 from "./Children2.vue"

const count = ref(0)

const increment = () => {
  count.value++
}

const context: MyContext = {
  count,
  increment
}

provide(MyContextKey, context)
</script>
