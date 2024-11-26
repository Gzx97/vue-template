<script lang="ts" setup>
import { ref } from "vue"
import { useRoute } from "vue-router"
const route = useRoute()
const id = ref<string | undefined>(route.params.id as string | undefined)
</script>
<template>
  <div class="app-container">
    <p>当前 ID: {{ id }}</p>
  </div>
</template>

<style lang="scss" scoped></style>
