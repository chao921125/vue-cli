import cookies from "./util.cookies";
// import db from "./util.db";
import log from "./util.log";
import storage from "./util.storage";

const util = {
  cookies,
  // db,
  log,
  storage,
};

/**
 * @description 更新标题
 * @param titleText
 */
util.title = function (titleText) {
  const processTitle = process.env.VUE_APP_TITLE || "";
  window.document.title = `${processTitle}${titleText ? ` | ${titleText}` : ""}`;
};

/**
 * @description 打开新页面
 * @param {String} url 地址
 */
util.open = function (url) {
  let a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("target", "_blank");
  a.setAttribute("id", "open_window_blank");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(document.getElementById("open_window_blank"));
};

export default util;
