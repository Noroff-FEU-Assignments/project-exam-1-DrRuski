import { blogListContainer } from "./containers/containers.js";

const url = "https://imdev.no/wp-json/wp/v2/posts?_embed&per_page=20";

async function getBlogPosts() {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();

    console.log(blogPosts);

    blogPosts.map((post) => {
      const postId = `${post.id}`;
      const imgUrl = `${post._embedded["wp:featuredmedia"][0].source_url}`;
      const postTitle = `${post.title.rendered}`;
      const category = `${post._embedded["wp:term"][0]
        .map((catg) => `${catg.name}`)
        .join(" ")}`;
      const postTags = `${post._embedded["wp:term"][1]
        .map((tag) => `${tag.name}`)
        .join(" ")}`;
      const author = `${post._embedded.author.map(
        (authorName) => authorName.name
      )}`;

      console.log(postTags);

      if (
        !postTags.toLowerCase().startsWith("latest") &&
        !postTags.toLowerCase().startsWith("popular")
      ) {
        blogListContainer.innerHTML += `
                                <div class="blogPostWrapper flex-vert">
                                  <a href="individualBlog.html?id=${postId}">
                                    <img class="postImage" src="${imgUrl}">
                                    <p class="${postTags} blogPostTags">${postTags}</p>
                                    <h4>${postTitle}</h4>
                                  </a>
                                  <div class="flex-horiz">
                                    <p class="subtext">${author} | <a href="#" class="subtext" id="${category}">#${category}</a></p>
                                  </div>
                                </div>`;
      }
    });
  } catch (error) {
    console.log(error);
  }
}

getBlogPosts();
