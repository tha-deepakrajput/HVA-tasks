// 1. Greet Function : 


function greet(name) {
  return `Hello, ${name}!`
}

console.log(greet("Deepak Rajput"))



// 2. greetDefault Function :


function greetDefault(Guest) {
  if (!Guest){
    return `Hello, Guest!`
  }
  else {
    return `Hello, ${Guest}!`
  }
}

console.log(greetDefault("deepakrajput"))


// 3. Store greet function in  greetfunction variable : 


const greetfunction = function greet(name) {
  return `Hello, ${name}!`
}

console.log(greetfunction("deepak"))


// 4. Arrow Function : 


const greetArrow = (name) => {
  return `Hello, ${name}!`
}

console.log(greetArrow("deepak")) 