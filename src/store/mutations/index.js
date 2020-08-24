import * as auth from "./auth";
import * as user from "./user";
import * as localStorage from "./local-storage";

export default {
  mutations: {
    ...localStorage,
    ...auth,
    ...user
  }
};
