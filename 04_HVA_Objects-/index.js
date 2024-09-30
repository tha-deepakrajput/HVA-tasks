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