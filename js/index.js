import {
  indexBottomSection,
  indexMidSection,
  indexTopSection,
  test,
} from "./containers/containers.js";

const url = "https://imdev.no/wp-json/wp/v2/posts?_embed&per_page=100";
let count = 0;

async function getBlogPosts() {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();

    blogPosts.map((post) => {
      const imgUrl = `${post._embedded["wp:featuredmedia"][0].source_url}`;
      const postTitle = `${post.title.rendered}`;
      const category = `${post._embedded["wp:term"][0][0].name}`;

      indexTopSection.innerHTML += `<div>
                              <img class="postImage"postImage src="${imgUrl}">
                              <h4>${postTitle}</h4>
                              <p>${category}</p>
</div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

getBlogPosts();
