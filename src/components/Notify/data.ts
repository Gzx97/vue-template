export interface ListItem {
  avatar?: string
  title: string
  datetime?: string
  description?: string
  status?: "primary" | "success" | "info" | "warning" | "danger"
  extra?: string
}

export const notifyData: ListItem[] = [
  {
    avatar: "https://xxx.png",
    title: "xxx",
    datetime: "一年前",
    description: "xxxx"
  }
]

export const messageData: ListItem[] = [
  {
    avatar: "https://gw.alipayobjects.com/zos/rmsportal/ThXAXghbEsBCCSDihZxY.png",
    title: "来自楚门的世界",
    description: "如果再也不能见到你，祝你早安、午安和晚安",
    datetime: "1998-06-05"
  }
]

export const todoData: ListItem[] = [
  {
    title: "任务名称",
    description: "这家伙很懒，什么都没留下",
    extra: "未开始",
    status: "info"
  },
  {
    title: "任务名称",
    description: "这家伙很懒，什么都没留下",
    extra: "进行中",
    status: "primary"
  },
  {
    title: "任务名称",
    description: "这家伙很懒，什么都没留下",
    extra: "已超时",
    status: "danger"
  }
]
