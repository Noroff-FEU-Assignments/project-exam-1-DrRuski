import {
  individualPostContainer,
  modalContainer,
} from "./containers/containers.js";

const queryString = document.location.search;
const params = new URLSearchParams(queryString);
const id = params.get("id");

const url = "https://imdev.no/wp-json/wp/v2/posts/" + id + "?_embed";

async function singlePost() {
  try {
    const response = await fetch(url);
    const singlePost = await response.json();

    console.log(singlePost);

    const postTitle = singlePost.title.rendered;
    const postImage = singlePost.jetpack_featured_media_url;
    const postAuthor = singlePost._embedded.author[0].name;
    const postCategory = singlePost._embedded["wp:term"][0][0].name;
    const postTags = singlePost._embedded["wp:term"][1]
      .map((tag) => `${tag.name}`)
      .join(" ");

    document.title = `Bongo Bloggers | ${postTitle}`;
    individualPostContainer.innerHTML = `
                                        <div class="postContent flex-vert">
                                            <h1 class="postTitle">${postTitle}</h1>
                                            <h2 class="postAuthor"><span class="byAuthor">BY</span> ${postAuthor}</h2>
                                            <p>25min read | 231 comments | <a id="${postCategory}" href="#">#${postCategory}</a></p>
                                            <p class="${postTags} blogPostTags">${postTags}</p>
                                            <img id="postImg" src="${postImage}">
                                            <p>${singlePost.content.rendered}</p>
                                        </div>`;

    // Modal Image Function
    modalContainer.innerHTML = `<span class="close">&times;</span>
                                <img id="imgBtn" class="modalImg" src="${postImage}">`;
    const postDisplayedImage = document.getElementById("postImg");
    const modalImageDisplay = document.getElementById("imgBtn");
    postDisplayedImage.addEventListener("click", () => {
      modalContainer.style.display = "block";
      modalImageDisplay.src = this.src;
    });
    const closeBtn = document.querySelector(".close");
    closeBtn.addEventListener("click", () => {
      modalContainer.style.display = "none";
    });
    modalContainer.addEventListener("click", (e) => {
      if (e.target === modalContainer) {
        modalContainer.style.display = "none";
      }
    });
  } catch (error) {}
}

singlePost();
