import {
  prevButton,
  nextButton,
  carouselContainer,
} from "../containers/containers.js";

export function carouselListener() {
  const latestPost = document.querySelector(".latestPost");
  prevButton.addEventListener("click", () => {
    const slideWidth = latestPost.clientWidth;
    carouselContainer.scrollLeft -= slideWidth;
  });

  nextButton.addEventListener("click", () => {
    const slideWidth = latestPost.clientWidth;
    carouselContainer.scrollLeft += slideWidth;
  });
}
