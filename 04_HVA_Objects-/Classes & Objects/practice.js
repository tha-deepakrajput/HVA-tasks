let data = "Most secrent informations."

class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }

  viewData() {
    // console.log(`Website Data : ${data}`)
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

// console.log(admin1)

// console.log(data);

// console.log(admin1.editData());

// console.log(data);

let schedule = {}

function emtObj(schedule) {
  for (let key in schedule) {
    return false;
  }
  return true;
}
// console.log(emtObj())

const salaries = {
  john: 100,
  ann: 160,
  pete: 130
}

let sum = 0;

function sumOfSalaries() {
  for (let key in salaries) {
    sum += salaries[key]
  }
  return sum
}

// console.log(sumOfSalaries());


// METHOD Object.assign(dest, ...sources)
let user = {name: "John"}

let permission1 = {canView: true}
let permission2 = {canEdit: true}

Object.assign(user, permission1, permission2)

console.log(user.canView);
console.log(user.name);
console.log(user.canEdit);
