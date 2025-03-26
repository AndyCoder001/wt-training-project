const postsContainer = document.getElementById("posts");
const recentPostsContainer = document.getElementById("recent-posts");

const posts = [
    { title: "College ki Yaari", content: "This is one of the best songs of Nishant.", img: "image1.png", link: "blog-post1.html" },
    { title: "Dil Toota", content: "This is first song of Nishant.", img: "image2.png", link: "blog-post2.html" },
    { title: "Jazbaat", content: "This is the first album of 9 songs coming soon.", img: "image3.png", link: "blog-post3.html" }
];

posts.forEach(post => {
    const postElement = document.createElement("div");
    postElement.classList.add("card", "p-3", "mb-3");
    postElement.innerHTML = `
        <img src="${post.img}" class="card-img-top" alt="Blog Image">
        <h5 class="mt-2">${post.title}</h5>
        <p>${post.content}</p>
        <a href="${post.link}" class="btn btn-primary">Read Now</a>
    `;
    postsContainer.appendChild(postElement);

    const recentPostElement = document.createElement("li");
    recentPostElement.classList.add("list-group-item");
    recentPostElement.innerHTML = `<a href="${post.link}">${post.title}</a>`;
    recentPostsContainer.appendChild(recentPostElement);
});
