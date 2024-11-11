const url = 'https://jsonplaceholder.typicode.com/posts';
const posts = document.querySelector('#posts');

async function getPosts() {
    try{
        let response = await fetch(url);
        console.log(response);
        let data = await response.json();
        console.log(data);
        data.forEach(element => {
            let newDiv = document.createElement('div');
            newDiv.style.border = '1px solid black';
            newDiv.style.margin = '10px';
            let userId = element.userId;
            let id = element.id;
            let title = element.title;
            let body = element.body;
            console.log(userId)
            console.log(id);
            console.log(title);
            console.log(body);
            
            // UserId
            let p1 = document.createElement('p');
            p1.innerHTML = `<b>UserId</b> : ${userId}`;
            newDiv.appendChild(p1);
            
            // Id 
            let p2 = document.createElement('p');
            p2.innerHTML = `<b>Id</b> : ${id}`;
            newDiv.appendChild(p2);

            // Title
            let p3 = document.createElement('p');
            p3.innerHTML = `<b>Title</b> : ${title}`;
            newDiv.appendChild(p3);

            // Body 
            let p4 = document.createElement('p');
            p4.innerHTML = `<b>Body</b> : ${body}`;
            newDiv.appendChild(p4);

            document.body.appendChild(newDiv);
        });
    }
    catch (error) {
        console.error(error);
    }
}

getPosts();

