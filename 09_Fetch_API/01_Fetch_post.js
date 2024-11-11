const url = 'https://jsonplaceholder.typicode.com/posts';
const posts = document.querySelector('#posts');

async function getPosts() {
    let response = await fetch(url);
    console.log(response);
    let data = await response.json();
    console.log(data);
}

getPosts();

// let newDiv = document.createElement('div');
// newDiv.id = 'UserId';

// async function getUserId() {
//     let response = await fetch(`${url}?userId=${newDiv.id}`);
//     console.log(response);
//     let data = await response.json();
//     console.log(data);
//     newDiv.innerText = JSON.stringify(data);
//     document.body.append(newDiv);
// }

// getUserId();


let newDiv = document.createElement('div');
newDiv.id = 'UserId';

async function getUserId() {
    let response = await fetch(`${url}?userId=${newDiv.id}`);
    console.log(response);
    
    if (response.ok) {  // Check if the response status is OK
        let data = await response.json();
        console.log(data);
        
        // Convert data to a string if it is an object, or access specific properties as needed
        newDiv.innerText = JSON.stringify(data);
        
        document.body.append(newDiv);
    } else {
        console.error("Failed to fetch data:", response.status);
    }
}

getUserId();
