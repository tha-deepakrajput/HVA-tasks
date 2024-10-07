// A. --define and initialize the array : 
let fruits = ["apple", "banana", "cherry", "date"]


// B.  Iterate and Log Using forEach():
fruits.forEach(function(fruit) {
    // console.log(fruit.toUpperCase());
})

// BY USING ARROW FUNCTIONS : 
fruits.forEach(fruit => {
    // console.log(fruit.toUpperCase());
})


// C. Calculate Total Characters Using forEach():
let totalCharacters = 0;

fruits.forEach(function(fruit) {
    return totalCharacters += fruit.length;
})
// console.log(totalCharacters);


// D. Iterate and Create a New Modified Array Using map():
// reversedFruits = fruits.map(function(fruit) {
//     return fruit.split('').reverse().join('');
// })
// console.log(reversedFruits);

// BY USING ARROW FUNCTION
reversedFruits = fruits.map(fruit => {
    return fruit.split('').reverse().join('');
})
// console.log(reversedFruits);


// E. Iterate and Create a New Filtered Array Using filter():
// let longFruits = fruits.filter(function(fruit) {
//     return fruit.length > 5;
// })
// console.log(longFruits);

// BY USING ARROW FUNCTION 
let longFruits = fruits.filter(fruit => {
    return fruit.length > 5;
})
// console.log(longFruits);


// F. Create a New Filtered and Modified Array using filter() and map():
let filterForA = fruits.filter(function(fruit) {
    return fruit.includes('a');
})
console.log(filterForA);

let aFruitsUpper = filterForA.map(function(fruit) {
    return fruit.toUpperCase();
})
console.log(aFruitsUpper);