// let fetchPostBtn = document.querySelector('button');
// let postBox = document.querySelector('#posts');

// fetchPostBtn.addEventListener('click', () => {
//     postBox.innerHTML = '';
//     let userId = document.querySelector('#inputUserId').value;

//     if (userId >= 1 && userId <= 10) {
//         fetchPosts(userId);
//     }
//     else {
//         alert(`Please Enter the userID from 1 to 10`);
//     }
// });

// async function fetchPosts(userId) {
//     try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
//         console.log(response);
//         let data = await response.json();
//         console.log(data);

//         for (let element of data) {
//             let userId = element.userId;
//             let id = element.id;
//             let title = element.title;
//             let body = element.body;

//             let div = document.createElement('div');

//             div.style.border = '1px solid black';
//             div.style.margin = '10px';
//             div.style.padding = '10px';

//             div.innerHTML = `
//                 <b>UserId</b> : ${userId} <br>
//                 <b>Id</b> : ${id} <br>
//                 <b>Title</b> : ${title} <br>
//                 <b>Body</b> : ${body}
//                 <div id="#comments">
//                     <p> <strong>Comments : </strong</p>
//                 </div>
//             `;

//             postBox.appendChild(div); 

//             // document.body.appendChild(postBox);

//             await fetchComments(id);
//         }
//     }
//     catch (error) {
//         console.log(`Error fetching Post : `, error);
//     }
// }

// // fetchPosts();

// async function fetchComments(postId) {
//     try {
//         let response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
//         console.log(response);
//         let data = await response.json();
//         console.log(data);

//         let commentContainer = document.querySelector(`#comments - ${postId}`);

//         data.forEach(element => {
//             let commentId = element.id
//             let Name = element.name;
//             let Email = element.email;
//             let commentBody = element.body;

//             let commentBox = document.createElement('div');

//             commentBox.style.border = '1px solid black';
//             commentBox.style.margin = '10px';
//             commentBox.style.padding = '10px';

//             commentBox.innerHTML = `
//                 <b>Comment ID : </b> ${commentId} <br>
//                 <b>Name : </b> ${Name} <br>
//                 <b>Email : </b> ${Email} <br>
//                 <b>Comment Body : </b> ${commentBody}
//             `
//             commentContainer.appendChild(commentBox);
//         });
//     }
//     catch (error) {
//         console.log(`Error fetching comments ${postId}`, error);
//     }
// }





let fetchPostBtn = document.querySelector('button');
let postBox = document.querySelector('#posts');

fetchPostBtn.addEventListener('click', () => {
    postBox.innerHTML = '';
    let userId = document.querySelector('#inputUserId').value;

    if (userId >= 1 && userId <= 10) {
        fetchPosts(userId);
    } else {
        alert(`Please enter a user ID from 1 to 10`);
    }
});

async function fetchPosts(userId) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`);
        console.log(response);
        let data = await response.json();
        console.log(data);

        for (let element of data) {
            let userID = element.userId;
            let id = element.id;
            let title = element.title;
            let body = element.body;

            let div = document.createElement('div');

            div.style.border = '1px solid black';
            div.style.margin = '10px';
            div.style.padding = '10px';

            div.innerHTML = `
                <b>UserId</b> : ${userID} <br>
                <b>Id</b> : ${id} <br>
                <b>Title</b> : ${title} <br>
                <b>Body</b> : ${body}
                <div id="comments-${id}">
                    <p><strong>Comments:</strong></p>
                </div>
            `;

            postBox.appendChild(div); 

            // Fetch comments for each post
            await fetchComments(id);
        }
    } catch (error) {
        console.log(`Error fetching posts: `, error);
    }
}

async function fetchComments(postId) {
    try {
        let response = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`);
        console.log(response);
        let data = await response.json();
        console.log(data);

        let commentContainer = document.querySelector(`#comments-${postId}`);

        data.forEach(element => {
            let commentId = element.id;
            let Name = element.name;
            let Email = element.email; // Corrected to lowercase
            let commentBody = element.body;

            let commentBox = document.createElement('div');

            commentBox.style.border = '1px solid black';
            commentBox.style.margin = '10px';
            commentBox.style.padding = '10px';

            commentBox.innerHTML = `
                <b>Comment ID:</b> ${commentId} <br>
                <b>Name:</b> ${Name} <br>
                <b>Email:</b> ${Email} <br>
                <b>Comment Body:</b> ${commentBody}
            `;
            commentContainer.appendChild(commentBox);
        });
    } catch (error) {
        console.log(`Error fetching comments for post ID ${postId}:`, error);
    }
}
