import {
  indexBottomSection,
  indexMidSection,
  carouselContainer,
  nextButton,
  prevButton,
  topSection,
} from "./containers/containers.js";

const url = "https://imdev.no/wp-json/wp/v2/posts?_embed&per_page=30";

async function getBlogPosts() {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();

    carouselContainer.innerHTML = "";

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
                                    <div class="flex-horiz"><span class="${postTags} blogPostTags">${postTags}</span></div>
                                    <h4>${postTitle}</h4>
                                    <p>${excerpt}</p>
                                </a>
                                  <div class="flex-horiz">
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
                                    <span class="lengthTest">${excerpt}</span>
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

    setListeners();
  } catch (error) {
    console.log(error);
  }
}

getBlogPosts();

function setListeners() {
  const latestPost = document.querySelector(".latestPost");
  prevButton.addEventListener("click", () => {
    const slideWidth = latestPost.clientWidth;
    carouselContainer.scrollLeft -= slideWidth;
  });

  nextButton.addEventListener("click", () => {
    const slideWidth = latestPost.clientWidth;
    carouselContainer.scrollLeft += slideWidth;
  });
}
