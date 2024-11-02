let div = document.querySelectorAll('.box');

div.forEach(box => {
    box.style.width = '500px';
    box.style.border = '2px solid black';
    box.style.margin = '10px';

    box.addEventListener('click', () => {
        if (box.style.backgroundColor === 'red') {
            box.style.backgroundColor = 'white';
        }
        else {
            box.style.backgroundColor = 'red';
        }
    });
});
