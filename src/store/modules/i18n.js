export default {
  namespaced: true,
  // 对数据的全局存储
  state: {
    language: "",
  },
  // 获取声明的属性值，实时监听动态变化，对数据进行计算
  getters: {
    getLanguage: (state) => {
      return state.language;
    },
  },
  // 对数据的同步更改
  mutations: {
    language(state, value) {
      state.language = value;
    },
  },
  // 对数据的异步更改
  actions: {
    languageCommit(context) {
      context.commit("language");
    },
  },
};
