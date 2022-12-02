import {
  blogListContainer,
  additionalPosts,
  showLessButton,
  showMoreButton,
} from "../containers/containers.js";

export function renderBlogPosts(blogPosts) {
  blogListContainer.innerHTML = "";

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
    const altText = `${post._embedded["wp:featuredmedia"][0].alt_text}`;

    if (
      !postTags.toLowerCase().startsWith("latest") &&
      !postTags.toLowerCase().startsWith("popular")
    ) {
      blogListContainer.innerHTML += `
                        <div class="blogPostWrapper flex-vert">
                          <a href="individualBlog.html?id=${postId}">
                            <img class="postImage" src="${imgUrl}" alt="${altText}">
                            <p class="${postTags} blogPostTags">${postTags}</p>
                            <h4>${postTitle}</h4>
                          </a>
                          <div class="flex-horiz">
                            <p class="subtext">${author} | <a href="#" class="subtext" id="${category}">#${category}</a></p>
                          </div>
                        </div>`;
    }

    showLessButton.style.display = "none";

    showMoreButton.addEventListener("click", () => {
      showMoreButton.style.display = "none";
      showLessButton.style.display = "block";

      if (
        postTags.toLowerCase().startsWith("latest") ||
        postTags.toLowerCase().startsWith("popular")
      ) {
        additionalPosts.innerHTML += `
                                  <div class="blogPostWrapper flex-vert">
                                    <a href="individualBlog.html?id=${postId}">
                                      <img class="postImage" src="${imgUrl}" alt="${altText}">
                                      <p class="${postTags} blogPostTags">${postTags}</p>
                                      <h4>${postTitle}</h4>
                                    </a>
                                    <div class="flex-horiz">
                                      <p class="subtext">${author} | <a href="#" class="subtext" id="${category}">#${category}</a></p>
                                    </div>
                                  </div>`;
      }
    });

    showLessButton.addEventListener("click", () => {
      showMoreButton.style.display = "block";
      showLessButton.style.display = "none";

      if (
        postTags.toLowerCase().startsWith("latest") ||
        postTags.toLowerCase().startsWith("popular")
      ) {
        additionalPosts.innerHTML = "";
      }
    });
  });
}
