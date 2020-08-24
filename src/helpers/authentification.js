const getJWTToken = () => localStorage.getItem("jwt");

const checkMetaAuth = to => to.matched.some(record => record.meta.requiresAuth);

const handleRedirect = (token, next) => {
  if (token) {
    return next();
  }

  next("/");
};

export const checkPermission = (to, _, next) => {
  const token = getJWTToken();
  const isAuth = checkMetaAuth(to);

  if (isAuth) {
    return handleRedirect(token, next);
  }

  next();
};
