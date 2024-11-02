let button = document.querySelector('button');

button.addEventListener('click', () => {
    console.log('Button click event executed');
});

let div = document.querySelector('div');

div.addEventListener('mouseover', () => {
    console.log('Mouseover event on div executed');
});

let inputBox = document.querySelector('input');

inputBox.addEventListener('input', () => {
    console.log('Input event executed')
})