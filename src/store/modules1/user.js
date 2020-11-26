export default {
  namespaced: true,
  state: {
    // 用户信息
    info: {},
  },
  actions: {
    /**
     * @description 设置用户数据
     * @param {Object} state vuex state
     * @param dispatch
     * @param {*} info info
     */
    set({ state, dispatch }, info) {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve) => {
        // store 赋值
        state.info = info;
        // 持久化
        await dispatch(
          "store/db/set",
          {
            dbName: "sys",
            path: "user.info",
            value: info,
            user: true,
          },
          { root: true }
        );
        // end
        resolve();
      });
    },
    /**
     * @description 从数据库取用户数据
     * @param {Object} state vuex state
     * @param dispatch
     */
    load({ state, dispatch }) {
      // eslint-disable-next-line no-async-promise-executor
      return new Promise(async (resolve) => {
        // store 赋值
        state.info = await dispatch(
          "store/db/get",
          {
            dbName: "sys",
            path: "user.info",
            defaultValue: {},
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
