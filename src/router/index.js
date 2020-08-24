import Vue from "vue";
import VueRouter from "vue-router";

import Routes from "./routes";
import { checkPermission } from "../helpers/authentification";

Vue.use(VueRouter);

const router = new VueRouter({
  routes: Routes
});

router.beforeEach(checkPermission);

export default router;
