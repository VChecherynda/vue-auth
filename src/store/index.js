import Vue from "vue";
import Vuex from "vuex";

import mutations from "./mutations";

Vue.use(Vuex);

const storeConfig = {
  state: {
    auth: {
      jwt: "",
      error: ""
    }
  },
  ...mutations
};

export default new Vuex.Store(storeConfig);
