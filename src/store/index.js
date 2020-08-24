import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";

Vue.use(Vuex);

const storeConfig = {
  state: {
    version: "",
    auth: {
      id: "",
      token: "",
      error: ""
    }
  },
  ...mutations
};

const store = new Vuex.Store(storeConfig);

store.subscribe((mutation, state) => {
  localStorage.setItem("store", JSON.stringify(state));
});

export default store;
