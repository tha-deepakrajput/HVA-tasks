const student = {
  name : "Deepak Rajput",
  email : "deepak23@navgurukul",
  age : 21,
  address : {
    country : "India",
    city : "Delhi",
    pincode : 110091
  }
}

// console.log(student.name);

// 2. 

student.age = 10;

// console.log(student.age)


// 3.


student.greet = function () {
  console.log(`Hello, ${this.name}!`)
}

// student.greet()

// console.log(student.address.country)

student.address.pincode = 110096    //  pincode update

// console.log(student.address.pincode)



// 4. 


const friend = {
  name : "Rahul",
  email : "rahul11@microsoft.com",
  age : 21,
  address : {
    country : "India",
    city : "Delhi",
    pincode : 110091
  }
}


friend.greet = function () {
  console.log(`Hello, ${this.name}!`)
}

// friend.greet();
// console.log(friend);


// 6.


const topper = {
  name : "Saurabh",
  email : "saurabh@theclasstopper.com",
  age : 22,
  address : {
    country : "India",
    city : "Delhi",
    pincode : 110091
  }
}

topper.greet = function (greet) {
  console.log(`Hello, ${this.name}!`);
}

topper.greet();
console.log(topper);

