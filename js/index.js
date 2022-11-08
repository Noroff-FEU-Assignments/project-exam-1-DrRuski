import {
  indexBottomSection,
  indexMidSection,
  indexTopSection,
} from "./containers/containers.js";

const url = 'https://imdev.no/wp-json/wp/v2/posts?_embed';

async function getBlogPosts() {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();

    

    for (let index = 0; index < blogPosts.length; index++) {
      const element = blogPosts[index];
      console.log(element)
      
      indexTopSection.innerHTML += `<div><h1>${element.title.rendered}</h1></div>`
    }
  } catch (error) {
    console.log(error);
  }
}

getBlogPosts();