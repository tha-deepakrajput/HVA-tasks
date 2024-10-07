// A.  define and initialize the array : 
let temperatures = [-3, 14, 22, 5, -10]

// B. Iterate and log using forEach() :
temperatures.forEach(function(temp) {
    // console.log(temp);
})
// by using arrow function
temperatures.forEach(temp => {
    // console.log(temp);
})

// by using arrow function
temperatures.forEach(temp => {
    // let frn = (5 * temp -32) / 9
    // console.log(frn);
})

// by using arrow function
temperatures.forEach(temp => {
    // let frn = (5 * temp - 32) / 9
    // console.log(frn);
})


// C. Iterate and create a new modified array using map() :
// let temperaturesFahrenhiet = temperatures.map(function(temp) {
//     return temp;
// })
// console.log(temperaturesFahrenhiet);

// by using arrow function
let temperaturesFahrenhiet = temperatures.map(temp => {
    return temp;
})
// console.log(temperaturesFahrenhiet);


// D. Iterate and create a new filtered array using filter():
// let belowFreezing = temperatures.filter(function(temp) {
//     let belowZero = 0
//     return belowZero = temp < 0;
// })
// console.log(belowFreezing);

// by using arrow function
let belowFreezing = temperatures.filter(temp => {
    let belowZero = 0
    return belowZero = temp < 0;
})
console.log(belowFreezing);