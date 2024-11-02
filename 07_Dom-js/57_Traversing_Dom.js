let firstUl = document.getElementById('list1');

let firstChild = firstUl.firstElementChild;

let currentEle1 = firstUl.nextElementSibling;

while (firstChild) {
    console.log(firstChild.textContent);
    firstChild = currentEle1;
}

let secondUl = document.getElementById('list2');

let secondUlChild = secondUl.firstElementChild;

let currentEle2 = secondUlChild.nextElementSibling;

