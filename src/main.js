import Vue from "vue";
import Vuelidate from "vuelidate";

import App from "./app.vue";

import router from "./router";
import store from "./store";

Vue.use(Vuelidate);

new Vue({
  el: "#app",
  render: h => h(App),
  router: router,
  store: store
}).$mount("#app");
