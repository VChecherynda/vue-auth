import { version } from "../../../../package.json";

export function initialiseStore(state) {
  const store = localStorage.getItem("store");
  const isSameVersion = store.version == version;

  if (store && isSameVersion) {
    this.replaceState({
      ...state,
      ...JSON.parse(localStorage.getItem("store"))
    });
  } else {
    state.version = version;
  }
}
