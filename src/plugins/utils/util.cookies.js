import Cookies from "js-cookie";

const cookies = {};

/**
 * @description 存储 cookie 值
 * @param {String} name cookie name
 * @param {String} value cookie value
 * @param cookieSetting
 */
cookies.set = function (name = "default", value = "", cookieSetting = {}) {
  let currentCookieSetting = {
    expires: 1,
  };
  Object.assign(currentCookieSetting, cookieSetting);
  Cookies.set(`${name}-${process.env.VUE_APP_VERSION}`, value, currentCookieSetting);
};

/**
 * @description 拿到 cookie 值
 * @param {String} name cookie name
 */
cookies.get = function (name = "default") {
  return Cookies.get(`${name}-${process.env.VUE_APP_VERSION}`);
};

/**
 * @description 拿到 cookie 全部的值
 */
cookies.getAll = function () {
  return Cookies.get();
};

/**
 * @description 删除 cookie
 * @param {String} name cookie name
 */
cookies.remove = function (name = "default") {
  return Cookies.remove(`${name}-${process.env.VUE_APP_VERSION}`);
};

/**
 * @description 删除全部 cookie
 */
cookies.removeAll = function () {
  let cookies = Cookies.get();
  for (let ck in cookies) {
    Cookies.remove(ck);
  }
};

export default cookies;
