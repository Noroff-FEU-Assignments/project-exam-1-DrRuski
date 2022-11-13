import {
  firstName,
  lastName,
  email,
  problemDescription,
} from "../containers/containers.js";

export const formValid =
  checkLength(firstName.value, 2) &&
  checkLength(lastName.value, 2) &&
  valEmail(email.value) &&
  checkLength(problemDescription.value, 2);

export function checkLength(value, len) {
  if (value.trim().length > len) {
    return true;
  } else {
    return false;
  }
}

export function valEmail(email) {
  const regEx = /\S+@\S+\.\S+/;
  const result = regEx.test(email);
  return result;
}
