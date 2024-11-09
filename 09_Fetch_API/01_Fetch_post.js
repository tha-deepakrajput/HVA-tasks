const url = 'https://jsonplaceholder.typicode.com/posts';
const posts = document.querySelector('#posts');

// const getPosts = async () => {
//     let response = await fetch(url);
//     console.log(response);
//     let data = await response.json();
//     posts.innerText = data;
// }

// async function getPosts() {
//     let response = await fetch(url);
//     console.log(response);
//     let data = await response.json();
//     posts.innerText = data;
// }

// getPosts();


async function getPosts() {
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();

    // Check if data is an array and display posts
    if (Array.isArray(data)) {
        posts.innerHTML = data.map(post => `<p><strong>${post.title}</strong>: ${post.body}</p>`).join("");
    } else {
        posts.innerText = "No posts available";
    }
}

getPosts();
