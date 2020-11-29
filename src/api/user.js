import request from "@plugins/axios";
import baseURL from "./index";

export function GetPhoneCheck(data) {
  return request({
    url: baseURL + "/constant/getPhoneCheck",
    method: "post",
    data,
  });
}
export function Login(data) {
  return request({
    url: baseURL + "/user/login",
    method: "post",
    data,
  });
}
export function AuthLogin(data) {
  return request({
    url: baseURL + "/user/authLogin",
    method: "post",
    data,
  });
}
export function Logout(data) {
  return request({
    url: baseURL + "/logout",
    method: "get",
    data,
  });
}
export function Session(data) {
  return request({
    url: baseURL + "/user/session",
    method: "get",
    data,
  });
}
export function Check(data) {
  return request({
    url: baseURL + "/user/service/check",
    method: "get",
    data,
  });
}
export function AccountLogin(data) {
  return request({
    url: baseURL + "/login",
    method: "post",
    data,
  });
}
