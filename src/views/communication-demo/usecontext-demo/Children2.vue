<template>
  <div>
    <h2>Child2：{{ count }}</h2>
    <button @click="increment">Increment from Child 2</button>
  </div>
</template>

<script lang="ts" setup>
import { inject } from "vue"
import { MyContext, MyContextKey } from "./types/myContext"

const context = inject<MyContext>(MyContextKey)

if (!context) {
  throw new Error("MyContext is not provided")
}

const { count, increment } = context
</script>
