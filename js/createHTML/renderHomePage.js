import {
  carouselContainer,
  indexMidSection,
  indexBottomSection,
} from "../containers/containers.js";

export function renderHomePage(blogPosts) {
  blogPosts.map((post) => {
    const postId = `${post.id}`;
    const imgUrl = `${post._embedded["wp:featuredmedia"][0].source_url}`;
    const postTitle = `${post.title.rendered}`;
    const category = `${post._embedded["wp:term"][0]
      .map((catg) => `${catg.name}`)
      .join(" ")}`;
    const excerpt = `${post.excerpt.rendered}`;
    const postTags = `${post._embedded["wp:term"][1]
      .map((tag) => `${tag.name}`)
      .join(" ")}`;
    const author = `${post._embedded.author.map(
      (authorName) => authorName.name
    )}`;

    if (postTags.toLowerCase().startsWith("latest")) {
      carouselContainer.innerHTML += `
                                <li class="latestPost">
                                  <a class="flex-vert" href="individualBlog.html?id=${postId}">
                                      <img class="postImageSlider" src="${imgUrl}">
                                      <div class="flex-horiz mobilePadding"><span class="${postTags} blogPostTags">${postTags}</span></div>
                                      <h4 class="mobilePadding">${postTitle}</h4>
                                      <p>${excerpt}</p>
                                  </a>
                                    <div class="flex-horiz mobilePadding">
                                      <p class="subtext">${author} | <a href="#" class="subtext" id="${category}">#${category}</a></p>
                                    </div>
                                </li>`;
    }

    if (postTags.toLowerCase().startsWith("popular")) {
      indexMidSection.innerHTML += `
                                <div class="popularPost flex-vert">
                                  <a class="flex-vert" href="individualBlog.html?id=${postId}">
                                      <img class="postImagePopular" src="${imgUrl}">
                                      <p class="${postTags} blogPostTags">${postTags}</p>
                                      <h4>${postTitle}</h4>
                                      <span class="paragraphLength">${excerpt}</span>
                                  </a>
                                  <div class="flex-horiz">
                                      <p class="subtext">${author} | <a href="#" class="subtext" id="${category}">#${category}</a></p>
                                  </div>
                                </div>`;
    }

    if (
      !postTags.toLowerCase().startsWith("popular") &&
      !postTags.toLowerCase().startsWith("latest")
    ) {
      indexBottomSection.innerHTML += `
                                <div class="bottomPosts flex-vert">
                                  <a class="flex-vert" href="individualBlog.html?id=${postId}">
                                      <img class="bottomPostImage" src="${imgUrl}">
                                      <p class="${postTags} blogPostTags">${postTags}</p>
                                      <h4>${postTitle}</h4>
                                  </a>
                                  <div>
                                      <p class="subtext">${author} | <a href="#" class="subtext" id="${category}">#${category}</a></p>
                                  </div> 
                                </div>`;
    }
  });
}
