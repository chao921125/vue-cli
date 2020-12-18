import { createStore } from "vuex";

const files = require.context("./modules", false, /\.js$/);
const modules = {};

files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});

const store = {
  namespaced: true,
  modules,
};

export default createStore({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    store,
  },
});
