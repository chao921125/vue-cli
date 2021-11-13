/**
 * 用户相关
 */

import axios from "@/plugins/axios";
import requestURL from "./index";

export function demoMethods(data) {
  return axios({
    url: requestURL.demoMethods,
    method: "GET",
    data,
  });
}

export function getPhoneCode(data) {
  return axios({
    url: requestURL.getPhoneCode,
    method: "GET",
    data,
  });
}

export function login(data) {
  return axios({
    url: requestURL.login,
    method: "post",
    data,
  });
}

export function logout(data) {
  return axios({
    url: requestURL.logout,
    method: "post",
    data,
  });
}

export function getUserInfo(data) {
  return axios({
    url: requestURL.getUserInfo,
    method: "post",
    data,
  });
}
