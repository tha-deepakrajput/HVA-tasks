let changeTextButton = document.querySelector('button');

changeTextButton.addEventListener('click', () => {
    let p = document.querySelector('p');
    p.textContent = 'Text has been Changed!'
})

let div = document.querySelector('div');
div.style.width = '200px'
div.style.border = '1px solid black'

div.addEventListener('mouseover', () => {
    div.style.backgroundColor = 'yellow';
    div.style.color = 'blue';
})

let newDiv = document.createElement('div');
newDiv.id = 'htmlContent';
newDiv.innerHTML = '<button type="button" class="newButton">Insert HTML</button>';
document.body.append(newDiv);

let newButton = document.getElementsByClassName('newButton')[0];

newButton.addEventListener('click', () => {
    div.innerHTML = '<h1>Deepak Rajput</h1>';
});

let newPara = document.createElement('p');
newPara.textContent = 'New Paragraph';
let toggleButton = document.createElement('button');
toggleButton.textContent = 'Toggle visibility'

document.body.append(newPara);
document.body.append(toggleButton);

toggleButton.addEventListener('click', () => {
    if(newPara.style.display === 'none') {
        newPara.style.display = 'block';
    }
    else {
        newPara.style.display = 'none';
    }
});