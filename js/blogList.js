import { renderBlogPosts } from "./createHTML/renderBlogList.js";
import { url } from "./utility/url.js";
import { main } from "./containers/containers.js";

async function getBlogPosts() {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();

    renderBlogPosts(blogPosts);
  } catch (error) {
    main.innerHTML = `<div>
                          <h1>${error}</h1>
                          <h3>Mega Error 404 Happened, calling in the monkey squad to fix this!</h3>
                          <h4>You could try refreshing the site.</h4> 
                        <div>`;
  }
}

getBlogPosts();
