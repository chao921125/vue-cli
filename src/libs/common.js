import Clipboard from "clipboard";

/**
 * 复制文案
 * @param ref
 * @param text
 */
export function copyText(ref, text) {
  let clipboard = new Clipboard(this.$refs[ref].$el, {
    // eslint-disable-next-line no-unused-vars
    text: (trigger) => {
      return text || "";
    }
  });
  // eslint-disable-next-line no-unused-vars
  clipboard.on("success", (e) => {
    // 释放内存
    clipboard.destroy();
    return true;
  });
  // eslint-disable-next-line no-unused-vars
  clipboard.on("error", (e) => {
    // 释放内存
    clipboard.destroy();
    return false;
  });
  // 解决第一次点击复制无效问题
  clipboard.onClick(event);
}

/**
 * url 转 对象
 * @param url
 * @returns {{}}
 */
export function param2Obj(url) {
  const search = decodeURIComponent(url.split("?")[1]).replace(/\+/g, " ");
  if (!search) {
    return {};
  }
  const obj = {};
  const searchArr = search.split("&")
  searchArr.forEach(v => {
    const index = v.indexOf("=");
    if (index !== -1) {
      const name = v.substring(0, index);
      const val = v.substring(index + 1, v.length);
      obj[name] = val;
    }
  })
  return obj;
}

/**
 * 深拷贝
 * @param source
 * @returns {*[]}
 */
export function deepClone(source) {
  if (!source && typeof source !== "object") {
    throw new Error("error arguments deepClone");
  }
  const targetObj = source.constructor === Array ? [] : {};
  Object.keys(source).forEach(keys => {
    if (source[keys] && typeof source[keys] === "object") {
      targetObj[keys] = deepClone(source[keys]);
    } else {
      targetObj[keys] = source[keys];
    }
  })
  return targetObj;
}

export function isMobile() {
  return navigator.userAgent.match(
    /(phone|pad|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows phone)/i
  );
}
