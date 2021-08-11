"use strict";
let storage = {};

storage.getLocalItem = function (key = "") {
  key = `${key}-${process.env.VUE_APP_VERSION}`;
  let item = localStorage.getItem(key);
  if (!item) return null;
  // 这点要判断是字符串还是对象
  let result = /^[{\\[].*[}\]]$/g.test(item);
  if (result) {
    return JSON.parse(item);
  } else {
    return item;
  }
}

storage.setLocalItem = function (key = "", value) {
  key = `${key}-${process.env.VUE_APP_VERSION}`;
  // 这点要判断是字符串还是对象
  if (typeof value === "string") {
    localStorage.setItem(key, value);
  } else {
    localStorage.setItem(key, JSON.stringify(value));
  }
}

storage.removeLocalItem = function (key = "") {
  key = `${key}-${process.env.VUE_APP_VERSION}`;
  localStorage.removeItem(key);
}

storage.clearLocal = function () {
  localStorage.clear();
}

// 获取localstorage最大存储容量
storage.getLocalMaxSpace = function () {
  if (!window.localStorage) {
    console.log("当前浏览器不支持localStorage!");
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
      window.localStorage.removeItem("test");
      window.localStorage.setItem("test", sum);
      console.log(sum.length / 1024 + "KB");
    } catch (e) {
      console.log(sum.length / 1024 + "KB超出最大限制");
      clearInterval(show);
    }
  }, 0.1);
}

// 获取使用了的localstorage的空间
storage.getLocalUsedSpace = function () {
  if (!window.localStorage) {
    console.log("浏览器不支持localStorage");
    return false;
  }
  let size = 0;
  for (let item in window.localStorage) {
    // eslint-disable-next-line no-prototype-builtins
    if (window.localStorage.hasOwnProperty(item)) {
      size += window.localStorage.getItem(item).length;
    }
  }
  console.log("当前localStorage使用容量为" + (size / 1024).toFixed(2) + "KB");
  return true;
}


storage.getSessionItem = function (key = "") {
  let item = sessionStorage.getItem(key);
  if (!item) return null;
  // 这点要判断是字符串还是对象
  let result = /^[{\\[].*[}\]]$/g.test(item);
  if (result) {
    return JSON.parse(item);
  } else {
    return item;
  }
}

storage.setSessionItem = function (key = "", value) {
  key = `${key}-${process.env.VUE_APP_VERSION}`;
  // 这点要判断是字符串还是对象
  if (typeof value === "string") {
    sessionStorage.setItem(key, value);
  } else {
    sessionStorage.setItem(key, JSON.stringify(value));
  }
}

storage.removeSessionItem = function (key = "") {
  key = `${key}-${process.env.VUE_APP_VERSION}`;
  sessionStorage.removeItem(key);
}

storage.clearSession = function () {
  sessionStorage.clear();
}

// 获取sessionStorage最大存储容量
storage.getSessionMaxSpace = function () {
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
}

// 获取使用了的sessionStorage的空间
storage.getSessionUsedSpace = function () {
  if (!window.sessionStorage) {
    console.log("当前浏览器不支持sessionStorage");
    return false;
  }
  let size = 0;
  for (let item in window.sessionStorage) {
    // eslint-disable-next-line no-prototype-builtins
    if (window.sessionStorage.hasOwnProperty(item)) {
      size += window.sessionStorage.getItem(item).length;
    }
  }
  console.log("当前sessionStorage使用容量为" + (size / 1024).toFixed(2) + "KB");
  return true;
}

storage.setItem = function (key = "", value) {
  key = `${key}-${process.env.VUE_APP_VERSION}`;
  // 这点要判断是字符串还是对象
  if (typeof value === "string") {
    localStorage.setItem(key, value);
    sessionStorage.setItem(key, value);
  } else {
    let item = JSON.stringify(value);
    localStorage.setItem(key, item);
    sessionStorage.setItem(key, item);
  }
},

storage.getItem = function (key = "") {
  key = `${key}-${process.env.VUE_APP_VERSION}`;
  let item = sessionStorage.getItem(key) || localStorage.getItem(key);
  if (!item) return null;
  // 这点要判断是字符串还是对象
  let result = /^[{\\[].*[}\]]$/g.test(item);
  if (result) {
    return JSON.parse(item);
  } else {
    return item;
  }
}

storage.removeItem = function (key = "") {
  key = `${key}-${process.env.VUE_APP_VERSION}`;
  sessionStorage.removeItem(key);
  localStorage.removeItem(key);
}

storage.clear = function () {
  sessionStorage.clear();
  localStorage.clear();
}

export default storage;
