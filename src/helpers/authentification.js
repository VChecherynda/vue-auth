export const checkPermission = (to, _, next) => {
  const store = getStore();
  const token = store?.auth?.token;

  const isAuth = checkMetaAuth(to);

  if (isAuth) {
    return handleRedirect(token, next);
  }

  next();
};

function getStore() {
  return JSON.parse(localStorage.getItem("store"));
}

function checkMetaAuth(to) {
  return to.matched.some(record => record.meta.requiresAuth);
}

function handleRedirect(token, next) {
  if (token) {
    return next();
  }

  next("/");
}
