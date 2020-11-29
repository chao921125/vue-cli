// TODO 暂时没有解决方案
import Vue from "vue";
import {
  formatMoney,
  formatMoney3,
  formatNumber,
  formatMoneyTwo,
  formatDate,
  dealStrLength,
  dealNumFront,
  dealNumBack,
  dealNumFrontOne,
  getGoalNameByKey,
} from "@libs/format";

const index = {
  formatMoney,
  formatMoney3,
  formatNumber,
  formatMoneyTwo,
  formatDate,
  dealStrLength,
  dealNumFront,
  dealNumBack,
  dealNumFrontOne,
  getGoalNameByKey,
};

Object.keys(index).forEach((key) => {
  Vue.filter(key, index[key]);
});

export default index;
