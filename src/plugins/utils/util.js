import cookies from "./util.cookies";
import db from "./util.db";
import log from "./util.log";

const util = {
  cookies,
  db,
  log,
};

/**
 * @description 更新标题
 * @param titleText
 */
util.title = (titleText) => {
  const processTitle = process.env.VUE_APP_TITLE || "";
  window.document.title = `${processTitle}${titleText ? ` | ${titleText}` : ""}`;
};

/**
 * @description 打开新页面
 * @param {String} url 地址
 */
util.open = (url) => {
  let a = document.createElement("a");
  a.setAttribute("href", url);
  a.setAttribute("target", "_blank");
  a.setAttribute("id", "link");
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(document.getElementById("query-id"));
};

// 处理token
util.dealToken = (str) => {
  if (str.indexOf("=") > -1) {
    let arr = str.split(";");
    for (let item of arr) {
      if (item.indexOf("token_") > -1) {
        return item.split("=")[1];
      }
    }
  }
  return "";
};

// 清除表单信息
util.clearFrom = (obj) => {
  if (obj !== undefined && obj != null && obj !== "") {
    for (let key in obj) {
      obj[key] = "";
    }
  }
};

export default util;
