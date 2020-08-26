import Vue from "vue";
import Vuex from "vuex";

import auth from "./modules/auth";
import user from "./modules/user";
import { initialiseStore } from "../helpers/local-storage";

Vue.use(Vuex);

const storeConfig = {
  state: {
    version: "",
    ...auth.state,
    ...user.state
  },
  actions: {
    ...auth.actions,
    ...user.actions
  },
  mutations: {
    ...auth.mutations,
    ...user.mutations,
    initialiseStore
  }
};

const store = new Vuex.Store(storeConfig);

store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});

export default store;
