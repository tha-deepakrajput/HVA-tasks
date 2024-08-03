// 1. calculate Area : 

function calculateArea(width, height) {
  return width * height
}

// console.log(`Area of a rectangle : ${calculateArea(5, 10)}`);


// 2. Calculate Area with default values : 

function calculateAreaWithDefault(width, height) {
  let result = 0
  if (!width || !height) {
    width = 1
    height = 1
    return width * height
  }
  else {
    return width * height
  }
}

// console.log(`Area of a rectangle : ${calculateAreaWithDefault()}`)
// console.log(`Area of a rectangle : ${calculateAreaWithDefault(5, 10)}`)


// 3. rewrite calculate area function in the calculateAreaFunction variable : 

const calculateAreaFunction = function calculateArea(width, height) {
  return width * height
}

// console.log(calculateAreaFunction(5, 10))


// 4. Calculate area as an Arrow function : 

const calculateAreaArrow = (width, height) => {
  return width * height
}

console.log(calculateAreaArrow(5, 10));
