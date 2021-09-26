export default {
  namespaced: true,
  // 对数据的全局存储
  state: {
    show: true,
    value: "0", // medium small mini
  },
  // 获取声明的属性值，实时监听动态变化，对数据进行计算
  getters: {
    // fn(state, [params]) // 参数作为查询条件
    isShow: (state) => {
      return state.show;
    },
    getValue: (state) => {
      return state.value;
    },
  },
  // 对数据的同步更改
  mutations: {
    // fn(state, [params]) // 参数作为赋值使用
    setShow(state) {
      state.show = true;
    },
    setHide(state) {
      state.show = false;
    },
    setValue(state, value) {
      state.value = value;
    },
  },
  // 对数据的异步更改
  actions: {
    // fn(context, [params]) // 参数作为赋值使用
    // fn({commit}, [params]) // 参数作为赋值使用
    // {
    //  state,      // 等同于 `store.state`，若在模块中则为局部状态
    //  rootState,  // 等同于 `store.state`，只存在于模块中
    //  commit,     // 等同于 `store.commit`
    //  dispatch,   // 等同于 `store.dispatch`
    //  getters,    // 等同于 `store.getters`
    //  rootGetters // 等同于 `store.getters`，只存在于模块中
    // }
    commitShow(context) {
      context.commit("setShow");
    },
    commitHide(context) {
      context.commit("setHide");
    },
    commitValue(context, value) {
      context.commit("setValue", value);
    },
  },
  // 应用层级的状态应该集中到单个 store 对象中。
  // 提交 mutation 是更改状态的唯一方法，并且这个过程是同步的。
  // 异步逻辑都应该封装到 action 里面。
  // import { mapState, mapGetter, mapMutation, mapAction } from "vuex"
  // computed: {
  //   ...mapState({
  //     counter: (state) => state.count /*映射不同名字的对象：count--->counter */
  //   })
  //   ...mapGetters(["fullName"])
  // }
  // methods：{
  //   /*将actions，mutations里面的方法映射到对应的methods,以便在组件里面可以直接应用*/
  // ...mapMutations({
  //   add: "increment" // 将 `this.add()` 映射为 `this.$store.dispatch("increment")`
  // })
  // ...mapActions({
  //   add: "increment" // 将 `this.add()` 映射为 `this.$store.dispatch("increment")`
  // })
  // }
};
