export function saveAuth(state, payload) {
  state.auth = {
    ...state.auth,
    ...payload
  };
}

export function saveError(state, payload) {
  state.auth.error = payload;
}
