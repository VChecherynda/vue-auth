import { required, minLength } from "vuelidate/lib/validators";

export const name = {
  required,
  minLength: minLength(4)
};

export const email = {
  required,
  minLength: minLength(4)
};

export const password = {
  required,
  minLength: minLength(4)
};
