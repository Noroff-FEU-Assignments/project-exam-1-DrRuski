import { checkLength, valEmail, formValid } from "./utility/formValidation.js";
import {
  form,
  firstName,
  lastName,
  email,
  firstNameError,
  lastNameError,
  emailError,
  problemDescription,
  problemDescriptionError,
  formBtn,
} from "./containers/containers.js";

import {
  buttonErrorStyle,
  buttonAcceptedStyle,
} from "./createHTML/formButtonDisplay.js";

function validForm(event) {
  event.preventDefault();

  if (checkLength(firstName.value, 2) === true) {
    firstNameError.style.display = "none";
  } else {
    firstNameError.style.display = "block";
  }

  if (checkLength(lastName.value, 2) === true) {
    lastNameError.style.display = "none";
  } else {
    lastNameError.style.display = "block";
  }

  if (valEmail(email.value)) {
    emailError.style.display = "none";
  } else {
    emailError.style.display = "block";
  }

  if (checkLength(problemDescription.value, 2) === true) {
    problemDescriptionError.style.display = "none";
  } else {
    problemDescriptionError.style.display = "block";
  }

  btnStyle();
}
form.addEventListener("submit", validForm);

function btnStyle() {
  if (formValid) {
    return buttonAcceptedStyle();
  } else {
    return buttonErrorStyle();
  }
}
