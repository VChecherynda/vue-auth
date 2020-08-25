export const checkPermission = (to, from, next) => {
  const store = getStore();
  const { token } = store?.auth;

  const isAuth = checkMetaAuth(to);
  const isIndexPage = to?.path === "/";

  if (isIndexPage) {
    token ? next({ path: "/admin" }) : next();
  }

  if (isAuth) {
    token ? next() : next("/");
  }

  next();
};

function getStore() {
  return JSON.parse(localStorage.getItem("store"));
}

function checkMetaAuth(to) {
  return to.matched.some(record => record.meta.requiresAuth);
}
