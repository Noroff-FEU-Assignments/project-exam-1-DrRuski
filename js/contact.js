import { contactForm, formBtn } from "./containers/containers.js";

function validForm(event) {
  event.preventDefault();

  if (validForm) {
    contactForm.reset();
    return buttonAcceptedStyle();
  }
}
contactForm.addEventListener("submit", validForm);

function buttonAcceptedStyle() {
  formBtn.style.backgroundColor = `rgb(40, 167, 69)`;
  formBtn.innerText = `The form has been submitted! ✔`;
}
