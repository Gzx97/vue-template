import { request } from "@/utils/service"
import type * as Login from "./types/login"

/** 获取登录验证码 */
export function getLoginCodeApi() {
  return request<Login.LoginCodeResponseData>({
    url: "login/code",
    method: "get"
  })
}

/** 登录并返回 Token */
export function loginApi(data: Login.LoginRequestData) {
  return Promise.resolve({
    code: 0,
    data: {
      token: "token-admin"
    },
    message: "登录成功"
  })
  return request<Login.LoginResponseData>({
    url: "users/login",
    method: "post",
    data
  })
}

/** 获取用户详情 */
export function getUserInfoApi() {
  return Promise.resolve({
    code: 0,
    data: {
      // token: "token-admin"，
      roles: ["admin"],
      username: "admin-jitrioe"
    },
    message: "获取用户详情成功（模拟）"
  })
  return request<Login.UserInfoResponseData>({
    url: "users/info",
    method: "get"
  })
}
