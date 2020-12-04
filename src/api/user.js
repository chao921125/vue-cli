import request from "@plugins/axios";
import urls from "./index";

export function GetPhoneCheck(data) {
  return request({
    url: urls.loginUrl + "/constant/getPhoneCheck",
    method: "post",
    data,
  });
}
export function Login(data) {
  return request({
    url: urls.loginUrl + "/user/login",
    method: "post",
    data,
  });
}
export function AuthLogin(data) {
  return request({
    url: urls.loginUrl + "/user/authLogin",
    method: "post",
    data,
  });
}
export function Logout(data) {
  return request({
    url: urls.loginUrl + "/logout",
    method: "get",
    data,
  });
}
export function Session(data) {
  return request({
    url: urls.loginUrl + "/user/session",
    method: "get",
    data,
  });
}
export function Check(data) {
  return request({
    url: urls.loginUrl + "/user/service/check",
    method: "get",
    data,
  });
}
export function AccountLogin(data) {
  return request({
    url: urls.loginUrl + "/login",
    method: "post",
    data,
  });
}
