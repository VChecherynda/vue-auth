import { version } from "../../package.json";

export function initialiseStore(state) {
  const store = JSON.parse(localStorage.getItem("store"));
  const isSameVersion = store?.version == version;

  if (store && isSameVersion) {
    this.replaceState({
      ...state,
      ...store
    });
  } else {
    state.version = version;
  }
}
