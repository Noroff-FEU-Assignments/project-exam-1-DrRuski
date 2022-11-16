import {
  indexBottomSection,
  indexMidSection,
  indexTopSection,
} from "./containers/containers.js";

const url = 'https://imdev.no/wp-json/wp/v2/posts?_embed&per_page=100';

async function getBlogPosts() {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();

    
    // console.log(blogPosts)


    for (let index = 0; index < blogPosts.length; index++) {
      const blogPost = blogPosts[index];
      

      
      const category = blogPost._link;
      

      console.log(blogPost)

      
      
      indexTopSection.innerHTML += `<div>
                                      <p>${category}</p>
                                      <img src="${blogPost.jetpack_featured_media_url}">
                                      <p></p>
                                      <h1>${blogPost.title.rendered}</h1>
                                    </div>`
    }
  } catch (error) {
    console.log(error);
  }
}

getBlogPosts();