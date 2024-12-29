const startBtn = document.querySelector('.startBtn');
const secondPage = document.querySelector('.secondPage');
const startGameBtn = document.querySelector('.startGameBtn');

const storeCategories = [];

startBtn.addEventListener('click', () => {
    document.body.innerHTML = '';
    document.body.appendChild(secondPage);
    secondPage.style.display = 'block';
});

// Third page 
startGameBtn.addEventListener('click', () => {
    document.body.innerHTML = '';
    // const categoryDiv = document.createElement('div');
    // categoryDiv.textContent = 'Deepak Rajput'
    // document.body.appendChild(categoryDiv);
    fetchCategories();
})

// This function is to fetch the categories
async function fetchCategories() {
    try {
        let response = await fetch('https://the-trivia-api.com/v2/categories');
        // console.log(response);
        let data = await response.json();
        console.log(data);
        displayCategories(data);
    }
    catch(error) {
        console.error(`Error : ${error}`);
        
    }
}

// This function is to display the categories 
function displayCategories(data) {
    document.body.innerHTML = '';
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.textContent = 'Categories';
    div.appendChild(h1);

    for (let category in data) {
        const newCategory = document.createElement('button');
        newCategory.textContent = category;
        console.log(newCategory);
        storeCategories.push(newCategory);
        div.appendChild(newCategory);

        newCategory.addEventListener('click', () => {
            document.body.innerHTML = ''
            // const quesDiv = document.createElement('div');
            // const quesHeading = document.createElement('h1');
            // quesHeading.textContent = 'Questions';
            fetchQuestions(category)
        })
    }
    document.body.appendChild(div);
}

async function fetchQuestions(category) {
    

    let response = await fetch(`https://the-trivia-api.com/v2/questions?categories=${category}&difficulty=easy,medium,hard&limit=6`);
    let data = await response.json();
    console.log(data);
    
    displayQuestions(data);
}

function displayQuestions(data) {
    document.body.innerHTML = ''
    const quesDiv = document.createElement('div');

    data.forEach(ques => {
        const p = document.createElement('p');
        console.log(ques.question.text);
        p.textContent = ques.question.text;
        quesDiv.appendChild(p);
    });
    document.body.appendChild(quesDiv);
}

async function fetchOptions() {
    let response = await fetch('https://the-trivia-api.com/v2/questions?categories=${category}&difficulty=easy,medium,hard&limit=6');
    let data = response.json();
    console.log(ques.answers)
}

