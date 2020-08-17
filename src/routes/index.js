import vSignIn from "../components/v-sign-in";
import vSignUp from "../components/v-sign-up";
import vResetPassword from "../components/v-reset-password";

export default [
  {
    path: "/",
    name: "sign-in",
    component: vSignIn
  },
  {
    path: "/sign-up",
    name: "sign-up",
    component: vSignUp
  },
  {
    path: "/reset-password",
    name: "reset-password",
    component: vResetPassword
  }
];
