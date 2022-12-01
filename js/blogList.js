import { renderBlogPosts } from "./createHTML/renderBlogList.js";

const url = "https://imdev.no/wp-json/wp/v2/posts?_embed&per_page=20";

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
