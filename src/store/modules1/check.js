export default {
  namespaced: true,
  state: {
    userCheck: {},
    shopName: "",
  },
  // 获取声明的属性值，实时监听动态变化
  getters: {
    getUserCheck(state) {
      return state.userCheck;
    },
    getShopName(state) {
      return state.shopName;
    },
  },
  // 修改属性值
  mutations: {
    setUserCheck(state, val) {
      state.userCheck = val;
    },
    setShopName(state, val) {
      state.shopName = val;
    },
  },
  actions: {
    commitUserCheck(context, val) {
      context.commit("setUserCheck", val);
    },
    commitShopName(context, val) {
      context.commit("setShopName", val);
    },
  },
};
