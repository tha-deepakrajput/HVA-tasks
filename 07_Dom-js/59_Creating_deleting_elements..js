function addListItem() {

    let list = document.getElementById('list')

    let li = document.createElement('li');

    let count = list.getElementsByTagName('li').length + 1;

    li.textContent = `New Item ${count}`;

    list.appendChild(li);
}

let addButton = document.getElementById('addButton');

addButton.addEventListener('click', () => {
    addListItem();
})

function removeLastListItem() {
    let list = document.getElementById('list');

    if (list.lastElementChild) {
        list.removeChild(list.lastElementChild);
    }
    else {
        console.log('Match Not Found');
    }
}

let removeButton = document.getElementById('removeButton');

removeButton.addEventListener('click', () => {
    removeLastListItem();
});