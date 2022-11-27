import {
  hamburger,
  mobileMenu,
  menuItems,
  closeBtn,
  menuOpenBtn,
} from "../containers/containers.js";

function mobileNavToggle() {
  if (mobileMenu.classList.contains("showMenu")) {
    mobileMenu.classList.remove("showMenu");
    closeBtn.style.display = "none";
    menuOpenBtn.style.display = "block";
  } else {
    mobileMenu.classList.add("showMenu");
    closeBtn.style.display = "block";
    menuOpenBtn.style.display = "none";
  }
}

hamburger.addEventListener("click", mobileNavToggle);

menuItems.forEach(function (menuItem) {
  menuItem.addEventListener("click", mobileNavToggle);
});
