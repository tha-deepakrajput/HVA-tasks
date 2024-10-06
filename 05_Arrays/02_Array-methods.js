// A. Define and initialize the array : 
let numbers = [1, 2, 3, 4, 5, 6]


// B. Iterate and log using forEach()
numbers.forEach(function(num) {
    console.log(num);
})

numbers.forEach(function(num) {
    // console.log(num * 2);
})


// C. Iterate and create a new modified array using map()
let squareNumbers1 = numbers.map(function(number){
    return number ** 2;
})
// console.log(squareNumbers1);

// BY USING ARROW FUNCTION
let squareNumbers2 = numbers.map(number => {
    return number ** 2;
})
// console.log(squareNumbers2);


// D. Iterate and create a New filtered array using filter() :
let evenNumbers1 = numbers.filter(function(number) {
    return number % 2 == 0;
})
// console.log(evenNumbers1);

// BY USING ARROW FUNCTION : 
let evenNumbers2 = numbers.filter(number => {
    return number % 2 == 0;
})
// console.log(evenNumbers2);