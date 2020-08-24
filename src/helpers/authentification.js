const getStore = () => localStorage.getItem("store");

const checkMetaAuth = to => to.matched.some(record => record.meta.requiresAuth);

const handleRedirect = (token, next) => {
  if (token) {
    return next();
  }

  next("/");
};

export const checkPermission = (to, _, next) => {
  const store = getStore();
  const token = store?.auth?.token;

  const isAuth = checkMetaAuth(to);

  if (isAuth) {
    return handleRedirect(token, next);
  }

  next();
};
