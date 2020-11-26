import { createApp } from "vue";
import { createStore } from "vuex";
import store from "./stores";

export default createApp().use(
  createStore({
    state: {},
    mutations: {},
    actions: {},
    modules: {
      store,
    },
  })
);
