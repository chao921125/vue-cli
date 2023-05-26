import Vue from "vue";

import errorLog from "@/plugins/error";
Vue.use(errorLog);

import util from "@/plugins/util";
Vue.prototype.$open = util.open;

// 常亮定义，含枚举
import constants from "@/libs/constants";
Vue.prototype.$constants = constants;

// Element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

const options = {
	size: "medium",
	zIndex: 3000,
};

// Element
Vue.use(ElementUI, options);

import "vuedraggable";

import * as echarts from "echarts";
Vue.prototype.$echarts = echarts;

import "@/assets/style/global-class.scss";
