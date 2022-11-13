import { formBtn } from "../containers/containers.js";

export function buttonErrorStyle() {
  formBtn.style.backgroundColor = `rgb(220, 53, 69)`;
  formBtn.value = `Something went wrong, try again.`;
}
export function buttonAcceptedStyle() {
  formBtn.style.backgroundColor = `rgb(40, 167, 69)`;
  formBtn.value = `The form has been submitted!`;
}
