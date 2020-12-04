import request from "@plugins/axios";
import urls from "./index";

export function Login(data) {
  return request({
    url: urls.loginUrl,
    method: "post",
    data,
  });
}
export function Logout(data) {
  return request({
    url: urls.loginUrl,
    method: "post",
    data,
  });
}
