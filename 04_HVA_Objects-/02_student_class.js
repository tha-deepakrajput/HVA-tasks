// class student {
//   constructor(name, email, age, country, city, pincode) {
//     this.name = name;
//     this.email = email;
//     this.age = age;
//     this.address = {
//       country : country,
//       city : city,
//       pincode : pincode
//     }
//   }

//   greet () {
//     console.log(`Hello, ${this.name}!`);
//   }

//   getFullAddress() {
//     console.log(`${this.address.country}, ${this.address.city} - ${this.address.pincode}`);
//   }
// }

// let student1 = new student("deepak", "deepak23@google.com", 21, "India", "Delhi", 110091);

// student1.greet();
// student1.getFullAddress();


// g . 


class me {
  constructor(name ,email, age, country, city, pincode) {
    this.name = name;
    this.email = email;
    this.age = age;
    this.address = {
      country : country,
      city : city,
      pincode : pincode
    }
  }

  greet() {
    console.log(`Hello, ${this.name}!`);
  }

  getFullAddress() {
    console.log(`${this.address.country}, ${this.address.city} - ${this.address.pincode}`);
  }

}


let owner = new me("Deepak Rajput", "deepakrajput@google.com", 21, "India", "Delhi", 110091);

owner.greet();
owner.getFullAddress();