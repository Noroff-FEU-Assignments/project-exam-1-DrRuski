import { renderBlogPosts } from "./createHTML/renderBlogList.js";
import { url } from "./utility/url.js";

async function getBlogPosts() {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();

    renderBlogPosts(blogPosts);
  } catch (error) {
    console.log(error);
  }
}

getBlogPosts();
