import request from "@/plugins/axios";
import baseURL from "./index";

export function Login(data) {
  return request({
    url: baseURL + "/user/login",
    method: "post",
    data,
  });
}
export function Logout(data) {
  return request({
    url: baseURL + "/logout",
    method: "post",
    data,
  });
}
