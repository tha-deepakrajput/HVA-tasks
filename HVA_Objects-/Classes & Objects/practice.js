let data = "Most secrent informations."

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    console.log(`Website Data : ${data}`)
  }
}

class Admin extends User {

  constructor(name, email) {
    super(name,email);
  }
  
  editData() {
    data = "some new values";
  }
}

let student1 = new User("deepak", "deepak23@gmail.com");
let student2 = new User("Rajput", "rajput@microsoft.com");
let teacher = new User("satish", "satish@college.com");


let admin1 = new Admin("admin1", "admin1@college.com");

// console.log(student2)

student1.viewData();
teacher.viewData();

console.log(admin1)

console.log(data);

console.log(admin1.editData());

console.log(data);