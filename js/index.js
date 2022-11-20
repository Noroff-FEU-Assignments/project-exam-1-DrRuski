import {
  indexBottomSection,
  indexMidSection,
  carouselContainer,
  nextButton,
  prevButton,
  test,
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
                                <img class="postImage"postImage src="${imgUrl}">
                                <p>${postTags}</p>
                                <h4>${postTitle}</h4>
                                <p>${excerpt}</p>
                                <div class="flex-horiz"><p class="subtext">${author}</p><a class="subtext">#${category}</a></div>
                              </li>`;
      }

      if (postTags.toLowerCase().startsWith("popular")) {
        indexMidSection.innerHTML += `<div>
                                <img class="postImage"postImage src="${imgUrl}">
                                <p>${postTags}</p>
                                <h4>${postTitle}</h4>
                                <p>${excerpt}</p>
                                <div class="flex-horiz"><p class="subtext">${author}</p><a class="subtext">#${category}</a></div>
                              </div>`;
      }

      if (
        !postTags.toLowerCase().startsWith("popular") &&
        !postTags.toLowerCase().startsWith("latest")
      ) {
        indexBottomSection.innerHTML += `<div>
                                <img class="postImage"postImage src="${imgUrl}">
                                <p>${postTags}</p>
                                <h4>${postTitle}</h4>
                                <p>${excerpt}</p>
                                <div class="flex-horiz"><p class="subtext">${author}</p><a class="subtext">#${category}</a></div>
                              </div>`;
      }
    });
  } catch (error) {
    console.log(error);
  }
}

getBlogPosts();

prevButton.addEventListener("click", () => {
  const slideWidth = test.clientWidth;
  carouselContainer.scrollLeft -= slideWidth;
});

nextButton.addEventListener("click", () => {
  const slideWidth = test.clientWidth;
  carouselContainer.scrollLeft += slideWidth;
});
