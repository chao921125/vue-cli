export function formatMoney(value) {
  if (!value) return "0.00";
  let intPart = Number(value) | 0;
  let intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  let floatPart = ".00";
  let value2Array = value.toString().split(".");
  if (value2Array.length === 2) {
    floatPart = value2Array[1].toString();
    if (floatPart.length === 1) {
      return intPartFormat + "." + floatPart + "0";
    } else {
      return intPartFormat + "." + floatPart;
    }
  } else {
    return intPartFormat + floatPart;
  }
}

export function formatMoney3(value) {
  if (!value) return "-";
  let intPart = Number(value) | 0;
  let intPartFormat = intPart.toString().replace(/(\d)(?=(?:\d{3})+$)/g, "$1,");
  let floatPart = ".00";
  let value2Array = value.toString().split(".");
  if (value2Array.length === 2) {
    floatPart = value2Array[1].toString();

    if (floatPart.length === 1) {
      return intPartFormat + "." + floatPart + "0";
    } else {
      return intPartFormat + "." + floatPart.substring(0, 2);
    }
  } else {
    return intPartFormat + floatPart;
  }
}

export function formatNumber(num) {
  if (num === 0) return "-";
  num = num.toString().replace(/\\,/g, "");
  if (isNaN(num) || num == null || num === "null" || num === "0" || num === 0) return "-";
  if (num < 0) {
    return "-" + formatMoneyInteger(Math.floor(Math.abs(num)) + "");
  } else {
    return formatMoneyInteger(Math.floor(num - 0) + "");
  }
}
// 整数位3位一个逗号，小数位保留两位四舍五入0.00
export function formatMoneyTwo(money) {
  if (typeof money === "number" && money % 1 === 0) {
    return money;
  }
  money = money.toString().replace(/\\,/g, "");
  if (isNaN(money) || money == null || money === "null" || money === "0" || money === 0) return "0.00";
  money = Math.round(money * 100) / 100;
  if (money < 0) {
    return "-" + formatMoneyInteger(Math.floor(Math.abs(money)) + "") + formatMoneyDecimal(Math.abs(money));
  } else {
    return formatMoneyInteger(Math.floor(money) + "") + formatMoneyDecimal(money);
  }
}

function formatMoneyInteger(money) {
  if (money.length <= 3) {
    return money === "" ? "0" : money;
  } else {
    let mod = money.length % 3;
    let output = mod === 0 ? "" : money.toString().substring(0, mod);
    for (let i = 0; i < Math.floor(money.length / 3); i++) {
      if (mod === 0 && i === 0) {
        output += money.toString().substring(mod + 3 * i, mod + 3 * i + 3);
      } else {
        output += "," + money.toString().substring(mod + 3 * i, mod + 3 * i + 3);
      }
    }
    return output;
  }
}
function formatMoneyDecimal(amount) {
  amount = Math.round((amount - Math.floor(amount)) * 100);
  return amount < 10 ? ".0" + amount : "." + amount;
}

export function formatDate(date, fmt) {
  if (fmt === undefined || fmt === null || fmt === "") {
    fmt = "yyyy-MM-dd";
  }
  date = new Date(date);
  if (/(y+)/.test(fmt)) {
    fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  }
  let o = {
    "y+": date.getFullYear().toString(),
    "Y+": date.getFullYear().toString(),
    "M+": date.getMonth() + 1,
    "d+": date.getDate(),
    "H+": date.getHours(),
    "m+": date.getMinutes(),
    "s+": date.getSeconds(),
    "S+": date.getMilliseconds(),
  };
  for (let k in o) {
    if (new RegExp(`(${k})`).test(fmt)) {
      let str = o[k] + "";
      fmt = fmt.replace(RegExp.$1, RegExp.$1.length === 1 ? str : padLeftZero(str));
    }
  }
  return fmt;
}

function padLeftZero(str) {
  return ("00" + str).substr(str.length);
}
// 处理小数点前数字
export function dealNumFront(val) {
  if (!val) return "-";
  let str = val.toString();
  // if (str.indexOf(".") > -1) return formatMoneyInteger(str.split(".")[0]) + "."
  if (str.indexOf(".") > -1) return str.split(".")[0] + ".";
  return str;
}
// 处理小数点前千分位数字
export function dealNumFrontOne(val) {
  if (!val) return "-";
  let str = val.toString();
  if (str.indexOf(".") > -1) return formatMoneyInteger(str.split(".")[0]) + ".";
  return str;
}
// 处理小数点后数字
export function dealNumBack(val) {
  if (!val) return "-";
  let str = val.toString();
  if (str.indexOf(".") > -1) {
    if (str.split(".")[1].length === 2) {
      return str.split(".")[1];
    } else if (str.split(".")[1].length === 0) {
      return "00";
    } else if (str.split(".")[1].length === 1) {
      return str.split(".")[1] + "0";
    } else {
      return str.split(".")[1].substring(0, 2);
    }
  }
  return "";
}

/**
  * 参数说明：
  * number：要格式化的数字
  * decimals：保留几位小数
  * thousands_sep：千分位符号
  * dec_point：小数点符号
  */
 // eslint-ignore
 const numberFormat = (value, decimals, thousands_sep, dec_point) => {
  if (!value) return 0;
  if (!decimals) decimals = 2;
  if (!thousands_sep) thousands_sep = ",";
  if (!dec_point) dec_point = ".";
  value = (value + "").replace(/[^0-9+-Ee.]/g, "");
  let n = !isFinite(+value) ? 0 : +value,
      prec = !isFinite(+decimals) ? 0 : Math.abs(decimals),
      sep = (typeof thousands_sep === "undefined") ? "," : thousands_sep,
      dec = (typeof dec_point === "undefined") ? "." : dec_point,
      s = "",
      toFixedFix = (n, prec) => {
        let k = Math.pow(10, prec);
        return "" + Math.ceil(n * k) / k;
      };
  s = (prec ? toFixedFix(n, prec) : "" + Math.round(n)).split(".");
  let re = /(-?\d+)(\d{3})/;
  while (re.test(s[0])) {
    s[0] = s[0].replace(re, "$1" + sep + "$2");
  }
  if ((s[1] || "").length < prec) {
    s[1] = s[1] || "";
    s[1] += new Array(prec - s[1].length + 1).join("0");
  }
  return s.join(dec);
};
// eslint-disable-next-line no-unused-vars
const reNumber = (value) => {
  return parseFloat(value.replace(/[^\d.-]/g, ""));
};
