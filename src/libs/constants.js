export default {
  i18n: {
    ZHCN: "zh-cn",
    ENUS: "en-us",
  },
  reg: {
    chinaPhone: /^0?(13[0-9]|14[57]|15[0-9]|166|17[0-9]|18[0-9]|19[89])[0-9]{8}$/,
    phoneCode: /^[0-9]{6}$/,
    number: /^[0-9]+$/,
    NumberTwoDecimal: /^(([1-9][0-9]*)|(([0]\.\d{1,2}|[1-9][0-9]*\.\d{1,2})))$/,
    chinaName: /^[\u4E00-\u9FA5]{2,4}$/,
    email: /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]+(\.[a-zA-Z0-9-]+)*\.[a-zA-Z0-9]{2,6}$/,
  },
  phoneCode: {
    time: 60,
    btnStartText: "获取验证码",
    btnEndText: "重新发送",
  },
};
