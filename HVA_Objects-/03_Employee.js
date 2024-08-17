class employee{
  constructor(name, email, age, department, position, salary){
    this.name = name
    this.email = email
    this.age = age
    this.department = department
    this.position = position
    this.salary = salary
    this.newEmployee = {
      name : name,
      email : email,
      age : age,
      department : department,
      position : position,
      salary : salary
    }
    this.manager = {
      name : name,
      email : email,
      age : age
    }
  }

  introduce() {
    console.log(`Hello, I am ${this.name}, ${this.position}`);
  }

  displaySalary(){
    console.log(`Salary : $${this.salary}`);
  }
}

console.log(this.newEmployee);

let myEmployee = new employee("sumit", "sumitkumar@gmail.com", 21, "TechEngeeningDepart", "softwareEngeneer", 150000)

let myManager = new employee("Lokesh", "lokesh@gmail.com", 20, "managingdpart", "Senior Manager", 40000);

myEmployee.introduce();
myEmployee.displaySalary();

myManager.introduce();
myManager.displaySalary();

