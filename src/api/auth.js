import httpClient from "./http-client";

export function signIn(payload) {
  return httpClient.post(`${process.env.VUE_APP_API}/auth/sign-in`, {
    ...payload
  });
}

export function signUp(payload) {
  return httpClient.post(`${process.env.VUE_APP_API}/auth/sign-up`, {
    ...payload
  });
}

export default {
  signIn,
  signUp
};
