export function saveAuth(state, payload) {
  state.auth.jwt = payload;
}

export function saveError(state, payload) {
  state.auth.error = payload;
}
