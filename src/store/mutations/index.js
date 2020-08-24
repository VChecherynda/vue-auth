import * as auth from "./getters/auth";
import * as user from "./getters/user";

export default {
  mutations: {
    ...auth,
    ...user
  }
};
