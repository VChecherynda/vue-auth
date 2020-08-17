import Vue from "vue";
import Vuex from "vuex";
import VueRouter from "vue-router";
import Vuelidate from "vuelidate";
import App from "./app.vue";
import Routes from "./routes";

Vue.use(Vuex);
Vue.use(VueRouter);
Vue.use(Vuelidate);

const router = new VueRouter({
  routes: Routes
});

Vue.config.productionTip = false;

const store = new Vuex.Store({
  state: {
    count: 0
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
