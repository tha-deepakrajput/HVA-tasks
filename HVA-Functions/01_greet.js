// 1. Greet Function : 


function greet(name) {
  console.log(`Hello, ${name}!`)
}

// greet("Deepak Rajput")



// 2. greetDefault Function :


function greetDefault(Guest) {
  if (!Guest){
    console.log(`Hello, Guest!`)
  }
  else {
    return console.log(`Hello, ${Guest}!`)
  }
}

// greetDefault("deepakrajput")


// 3. Store greet function in  greetfunction variable : 


const greetfunction = function greet(name) {
  return console.log(`Hello, ${name}!`)
}

// greetfunction("deepak")



// 4. Arrow Function : 


const greetArrow = (name) => {
  console.log(`Hello, ${name}!`)
}

greetArrow("deepak")