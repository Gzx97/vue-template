import { defineStore } from "pinia"

export const useDemoStore = defineStore("demo", {
  state: () => ({
    message: "", // 存储共享的消息
    count: 0 // 存储共享的计数器
  }),
  actions: {
    setMessage(newMessage: string) {
      this.message = newMessage
    },
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    }
  }
})
