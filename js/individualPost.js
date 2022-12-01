import { renderSinglePost } from "./createHTML/renderSinglePost.js";
import { main } from "./containers/containers.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://imdev.no/wp-json/wp/v2/posts/" + id + "?_embed";

async function singlePost() {
  try {
    const response = await fetch(url);
    const singlePost = await response.json();

    renderSinglePost(singlePost);
  } catch (error) {
    main.innerHTML = `<div>
                          <h1>${error}</h1>
                          <h3>Mega Error 404 Happened, calling in the monkey squad to fix this!</h3>
                          <h4>You could try refreshing the site.</h4> 
                        <div>`;
  }
}

singlePost();
