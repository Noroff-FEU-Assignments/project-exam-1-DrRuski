import {
  indexBottomSection,
  indexMidSection,
  indexTopSection,
} from "./containers/containers.js";

const url = "https://imdev.no/wp-json/wp/v2/posts?_embed&per_page=100";
let count = 0;

async function getBlogPosts() {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();

    console.log(blogPosts);

    blogPosts.map((post) => {
      const imgUrl = `${post._embedded["wp:featuredmedia"][0].source_url}`;
      const postTitle = `${post.title.rendered}`;
      const category = `${post._embedded["wp:term"][0][0].name}`;
      const excerpt = `${post.excerpt.rendered}`;
      const postTags = `${post._embedded["wp:term"][1]
        .map((tag) => `${tag.name}`)
        .join(" ")}`;

      indexTopSection.innerHTML += `<div>
                                <img class="postImage"postImage src="${imgUrl}">
                                <p>${postTags}</p>
                                <h4>${postTitle}</h4>
                                <p>${excerpt}</p>
                                <a class="subtext">#${category}</a>
                              </div>`;
    });
  } catch (error) {
    console.log(error);
  }
}

getBlogPosts();
