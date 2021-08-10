import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

const files = require.context("./modules", false, /\.js$/);
const modules = {};

files.keys().forEach((key) => {
  modules[key.replace(/(\.\/|\.js)/g, "")] = files(key).default;
});

const store = {
  namespaced: true,
  modules,
};

export default new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    store,
  },
});
