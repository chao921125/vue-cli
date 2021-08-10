/*
 * 用户相关
 * */

import axios from "@/plugins/axios";
import baseURL from "./index";

export function getPhoneCode(data) {
  return axios({
    url: baseURL.getPhoneCode,
    method: "GET",
    data,
  });
}

export function login(data) {
  return axios({
    url: baseURL.login,
    method: "post",
    data,
  });
}

export function logout(data) {
  return axios({
    url: baseURL.logout,
    method: "post",
    data,
  });
}

export function getUserInfo(data) {
  return axios({
    url: baseURL.getUserInfo,
    method: "post",
    data,
  });
}
