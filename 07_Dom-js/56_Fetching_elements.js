// fetch elements by ID
let div = document.getElementById('myDiv');
console.log(div.textContent);


// fetch elements by className
let myClass = document.getElementsByClassName('myClass');
for(i = 0; i < myClass.length; i++){
    console.log(myClass[i].textContent);
}


// fetch elements by tagName
let p = document.getElementsByTagName('P');

for(i = 0; i < p.length; i++){
    console.log(p[i].textContent);
}


// fetch elements using Query SelectorAll : 
let span = document.querySelectorAll('span');

for(i = 0; i < span.length; i++){
    console.log(span[i].textContent);
}


// fetch elements using query selector: 
let firstSpan = document.querySelector('span.highlight');
console.log(firstSpan.textContent);

