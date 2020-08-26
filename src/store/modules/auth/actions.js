import { signIn, signUp } from "../../../api/auth";
import router from "../../../router";

export async function handleSignIn({ commit }, payload) {
  try {
    const response = await signIn(payload);

    commit("saveAuth", response.data);

    router.push("/admin");
  } catch (error) {
    commit("saveError", error.response.data);
  }
}

export async function handleSignUp({ commit }, payload) {
  try {
    const response = await signUp(payload);

    commit("saveAuth", response.data);
  } catch (error) {
    commit("saveError", error.response.data);
  }
}

export default {
  handleSignIn,
  handleSignUp
};
