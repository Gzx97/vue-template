<script lang="ts" setup>
import { useRouter } from "vue-router"

const router = useRouter()

// const handle = () => {
//   console.log("跳转二级页面")
//   router.push({
//     path: "/dashboard/detail",
//     query: { id: 1 }
//   })

// }
const goToDetails = (id = "2") => {
  router.push({ name: "DashboardDetails", params: { id } }) // 动态跳转
}
</script>

<template>
  <div class="app-container">
    <el-button
      type="primary"
      @click="
        () => {
          goToDetails()
        }
      "
      >跳转二级页面</el-button
    >
    <el-empty description="欢迎来到首页" />
  </div>
</template>

<style lang="scss" scoped>
.center {
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
