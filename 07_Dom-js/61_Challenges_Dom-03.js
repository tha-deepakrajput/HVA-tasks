let changeBackgroundColor = document.querySelector('.box');
changeBackgroundColor.style.width = '500px';
changeBackgroundColor.style.height = '500px';
changeBackgroundColor.style.border = '2px solid black'

let button1 = document.querySelector('.redButton');
let button2 = document.querySelector('.yellowButton');
let button3 = document.querySelector('.blueButton');
let button4 = document.querySelector('.greenButton');

button1.addEventListener('click', () => {
    changeBackgroundColor.style.backgroundColor = 'red';
});

button2.addEventListener('click', () => {
    changeBackgroundColor.style.backgroundColor = 'yellow';
});

button3.addEventListener('click', () => {
    changeBackgroundColor.style.backgroundColor = 'blue';
});

button4.addEventListener('click', () => {
    changeBackgroundColor.style.backgroundColor = 'green';
});

let resetButton = document.createElement('button');
resetButton.textContent = 'Reset color'
changeBackgroundColor.append(resetButton);

resetButton.addEventListener('click', () => {
    changeBackgroundColor.style.backgroundColor = 'transparent';
});