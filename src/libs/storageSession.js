"use strict";

export default {
  getItem(key) {
    let item = sessionStorage.getItem(key);
    if (!item) return null;
    // 这点要判断是字符串还是对象
    let result = /^[{\\[].*[}\]]$/g.test(item);
    if (result) {
      return JSON.parse(item);
    } else {
      return item;
    }
  },
  setItem(key, value) {
    // 这点要判断是字符串还是对象
    if (typeof value === "string") {
      sessionStorage.setItem(key, value);
    } else {
      let item = JSON.stringify(value);
      sessionStorage.setItem(key, item);
    }
  },
  removeItem(key) {
    sessionStorage.removeItem(key);
  },
  getAll() {},
  clear() {
    sessionStorage.clear();
  },
  // eslint-disable-next-line no-unused-vars
  key(n) {},
  // eslint-disable-next-line no-unused-vars
  forEach(cb) {},
  // eslint-disable-next-line no-unused-vars
  has(key) {},
  deleteAllExpires() {},
  // 获取sessionStorage最大存储容量
  getMaxSpace() {
    if (!window.sessionStorage) {
      console.log("当前浏览器不支持sessionStorage!");
    }
    let test = "0123456789";
    let add = function (num) {
      num += num;
      if (num.length === 10240) {
        test = num;
        return;
      }
      add(num);
    };
    add(test);
    let sum = test;
    let show = setInterval(function () {
      sum += test;
      try {
        window.sessionStorage.removeItem("test");
        window.sessionStorage.setItem("test", sum);
        console.log(sum.length / 1024 + "KB");
      } catch (e) {
        console.log(sum.length / 1024 + "KB超出最大限制");
        clearInterval(show);
      }
    }, 0.1);
  },
  // 获取使用了的sessionStorage的空间
  getUsedSpace() {
    if (!window.sessionStorage) {
      console.log("当前浏览器不支持sessionStorage");
    }
    let size = 0;
    for (let item in window.sessionStorage) {
      // eslint-disable-next-line no-prototype-builtins
      if (window.sessionStorage.hasOwnProperty(item)) {
        size += window.sessionStorage.getItem(item).length;
      }
    }
    console.log("当前sessionStorage使用容量为" + (size / 1024).toFixed(2) + "KB");
  },
};
