// A. 

let colors = ["red", "green", "blue"]

// CONSOLE THE FIRST ELEMENT OF THE ARRAY
// console.log(colors[0]);


// B. 

// MODIFY COLOR ELEMENTS : 
colors[1] = "yellow"
// console.log(colors[1]);

// ADD AN ELEMENT TO COLORS : 
colors[3] = "Black"
// console.log(colors);


// C. 

// USE FOR LOOP TO ITERATE OVER THE COLORS AND LOG THE EACH COLOR

for (let i = 0; i < colors.length; i++) {
    // console.log(colors[i]);
}

// NOW USE WHILE LOOP

i = 0
while (i < colors.length) {
    // console.log(colors[i]);
    i++;
}

// FOR OF LOOPS : 

for (let color of colors) {
    // console.log(color);    
}


// D. 

// TYPE OF ARRAY : 

console.log(typeof(colors));

// LENGTH PROPERTY : 
console.log(colors.length);


// E. 

// push() METHOD TO ADD THE ELEMENT IN THE LAST OF THE ARRAY : 
colors.push("brown")
console.log(colors);


// pop() METHOD TO REMOVE THE ELEMENT FROM THE LAST OF THE ARRAY : 
colors.pop()
console.log(colors);

// indexOf() METHOD TO FIND THE INDEX OF THE ELEMENT : 
console.log(colors.indexOf("blue"));


// F. 

colors.owner = "Thakur"
console.log(colors);

// FOR IN LOOP : 

for (let key in colors) {
    console.log(`${key} : ${colors[key]}`);    
}