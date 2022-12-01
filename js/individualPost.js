import { renderSinglePost } from "./createHTML/renderSinglePost.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://imdev.no/wp-json/wp/v2/posts/" + id + "?_embed";

async function singlePost() {
  try {
    const response = await fetch(url);
    const singlePost = await response.json();

    renderSinglePost(singlePost);
  } catch (error) {}
}

singlePost();
