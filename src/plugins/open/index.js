import util from "@/libs/util";

export default {
  // eslint-disable-next-line no-unused-vars
  install(Vue, options) {
    Vue.prototype.$open = util.open;
  },
};
