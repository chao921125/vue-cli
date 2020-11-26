import Vue from "vue";
// Element
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";

import "vuedraggable";

import echarts from "echarts";

Vue.prototype.$echarts = echarts;

const options = {
  size: "medium",
  zIndex: 3000,
};

// Element
Vue.use(ElementUI, options);
