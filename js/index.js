import {
  indexBottomSection,
  indexMidSection,
  carouselContainer,
  nextButton,
  prevButton,
} from "./containers/containers.js";

const url = "https://imdev.no/wp-json/wp/v2/posts?_embed&per_page=100";

async function getBlogPosts() {
  try {
    const response = await fetch(url);
    const blogPosts = await response.json();

    console.log(blogPosts);

    blogPosts.map((post) => {
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
        carouselContainer.innerHTML += `<li class="latestPost flex-vert">
                                <img class="postImageSlider" src="${imgUrl}">
                                <div class="flex-horiz"><span class="${postTags} blogPostTags">${postTags}</span></div>
                                <h4>${postTitle}</h4>
                                <p>${excerpt}</p>
                                <div class="flex-horiz"><p class="subtext">${author} | <a href="#" class="subtext ${category}">#${category}</a></p></div>
                              </li>`;
      }

      if (postTags.toLowerCase().startsWith("popular")) {
        indexMidSection.innerHTML += `<div class="popularPost flex-vert">
                                <img class="postImagePopular" src="${imgUrl}">
                                <p class="${postTags} blogPostTags">${postTags}</p>
                                <h4>${postTitle}</h4>
                                <p>${excerpt}</p>
                                <div class="flex-horiz"><p class="subtext">${author} | <a href="#" class="subtext ${category}">#${category}</a></p></div>
                              </div>`;
      }

      if (
        !postTags.toLowerCase().startsWith("popular") &&
        !postTags.toLowerCase().startsWith("latest")
      ) {
        indexBottomSection.innerHTML += `<div class="bottomPosts flex-vert">
                                <img class="bottomPostImage" src="${imgUrl}">
                                <p class="${postTags} blogPostTags">${postTags}</p>
                                <h4>${postTitle}</h4>
                                <div class="flex-horiz"><p class="subtext">${author} | <a href="#" class="subtext ${category}">#${category}</a></p></div>
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
  const test = document.querySelector(".latestPost");
  prevButton.addEventListener("click", () => {
    const slideWidth = test.clientWidth;
    carouselContainer.scrollLeft -= slideWidth;
  });

  nextButton.addEventListener("click", () => {
    const slideWidth = test.clientWidth;
    carouselContainer.scrollLeft += slideWidth;
  });
}
