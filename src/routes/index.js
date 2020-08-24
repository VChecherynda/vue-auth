import signIn from "../views/sign-in";
import signUp from "../views/sign-up";
import resetPassword from "../views/reset-password";
import admin from "../views/admin";

export default [
  {
    path: "/",
    name: "sign-in",
    component: signIn,
    meta: {
      guest: true
    }
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: signUp,
    meta: {
      guest: true
    }
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: resetPassword,
    meta: {
      guest: true
    }
  },
  {
    path: "/admin",
    name: "admin",
    component: admin,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: "*",
    redirect: "/"
  }
];
