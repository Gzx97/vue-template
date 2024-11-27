import { request } from "@/utils/service"
import type * as Table from "./types/table"

/** 增 */
export function createTableDataApi(data: Table.CreateOrUpdateTableRequestData) {
  return request({
    url: "table",
    method: "post",
    data
  })
}

/** 删 */
export function deleteTableDataApi(id: string) {
  return request({
    url: `table/${id}`,
    method: "delete"
  })
}

/** 改 */
export function updateTableDataApi(data: Table.CreateOrUpdateTableRequestData) {
  return request({
    url: "table",
    method: "put",
    data
  })
}

/** 查 */
export function getTableDataApi(params: Table.TableRequestData) {
  return Promise.resolve({
    code: 0,
    data: {
      list: [
        {
          id: "330000197210141708",
          username: "Linda Jackson",
          phone: "18500813427",
          email: "t.bxpqxzlk@dknyrpkxj.pk",
          roles: "editor",
          status: true,
          createTime: "1995-04-08 18:07:45"
        },
        {
          id: "540000197908155609",
          username: "Linda Taylor",
          phone: "17404238739",
          email: "b.zcxkrlx@iesnuntfo.eg",
          roles: "admin",
          status: true,
          createTime: "1971-06-12 20:00:17"
        }
      ],
      total: 2
    },
    message: "获取表格成功（模拟）"
  })
  return request<Table.TableResponseData>({
    url: "table",
    method: "get",
    params
  })
}
