import mitt from "mitt"

type Events = {
  updateMessage: string // 定义事件名称和参数类型
  increment: void
  decrement: void
}

export const eventBus = mitt<Events>()
