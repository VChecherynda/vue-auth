import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";

// import Axios from "axios";

import App from "./app.vue";
import Routes from "./routes";

import { checkPermission } from "./helpers/authentification";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Vuelidate);

const router = new VueRouter({
  routes: Routes
});

router.beforeEach(checkPermission);

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    count: 0,
    jwt: ""
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
});

new Vue({
  el: "#app",
  render: h => h(App),
  router: router,
  store: store
}).$mount("#app");
