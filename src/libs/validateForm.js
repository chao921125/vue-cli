export const empty = (require, value, callback) => {
  let val = value.replace(/\s/g, "");
  if (val === "" || !val) {
    callback(new Error("该项必填"));
  } else {
    callback();
  }
};

export const ckUserName = (rule, value, callback) => {
  if (!value) {
    return callback(new Error("年龄不能为空"));
  }
  setTimeout(() => {
    if (!Number.isInteger(value)) {
      callback(new Error("请输入数字值"));
    } else {
      if (value < 18) {
        callback(new Error("必须年满18岁"));
      } else {
        callback();
      }
    }
  }, 1000);
};

export const ckPassword = (rule, value, callback) => {
  const reg = /^[a-zA-Z0-9]{6,16}$/;
  if (value === "") {
    callback(new Error("请输入密码"));
  } else if (reg.test(value)) {
    callback();
  } else {
    callback(new Error("请输入数字字母6-20"));
  }
};

export const ckPhone = (rule, value, callback) => {
  const reg = /^0?(13[0-9]|14[57]|15[0-9]|166|17[0-9]|18[0-9]|19[89])[0-9]{8}$/;
  if (value === "") {
    callback(new Error("请输入手机号"));
  } else if (reg.test(value)) {
    callback();
  } else {
    callback(new Error("请输入11位手机号"));
  }
};

export const ckPhoneCode = (require, value, callback) => {
  const reg = /^[0-9]{6}$/;
  if (value.replace(/\s/g, "") === "") {
    callback(new Error("请输入验证码"));
  } else if (reg.test(value.replace(/\s/g, ""))) {
    callback();
  } else {
    callback(new Error("请输入正确验证码"));
  }
};
