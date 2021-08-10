export default {
  namespaced: true,
  state: {
    // 尺寸
    value: "0", // medium small mini
  },
  mutations: {},
  modules: {},
  actions: {
    /**
     * @description 设置尺寸
     * @param {Object} state vuex state
     * @param dispatch
     * @param {String} size 尺寸
     */
    set({ state, dispatch }, size) {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve) => {
        // store 赋值
        state.value = size;
        // 持久化
        await dispatch(
          "store/db/set",
          {
            dbName: "sys",
            path: "size.value",
            value: state.value,
            user: true,
          },
          { root: true }
        );
        // end
        resolve();
      });
    },
    /**
     * @description 从持久化数据读取尺寸设置
     * @param {Object} state vuex state
     * @param dispatch
     */
    load({ state, dispatch }) {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve) => {
        // store 赋值
        state.value = await dispatch(
          "store/db/get",
          {
            dbName: "sys",
            path: "size.value",
            defaultValue: "default",
            user: true,
          },
          { root: true }
        );
        // end
        resolve();
      });
    },
  },
};
