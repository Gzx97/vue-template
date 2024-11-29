import { Ref } from "vue"

export interface MyContext {
  count: Ref<number>
  increment: () => void
}

export const MyContextKey: symbol = Symbol("MyContextKey")
