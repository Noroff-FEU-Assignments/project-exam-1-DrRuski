import { carouselContainer } from "./containers/containers.js";
import { carouselListener } from "./utility/carousel.js";
import { renderHomePage } from "./createHTML/renderHomePage.js";
import { url } from "./utility/url.js";
import { errorWarningDisplay } from "./createHTML/errorWarningDisplay.js";

async function getBlogPosts() {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();

    carouselContainer.innerHTML = "";

    renderHomePage(blogPosts);
    carouselListener();
  } catch (error) {
    errorWarningDisplay(error);
  }
}

getBlogPosts();
