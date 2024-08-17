class person {
  
  contructor() {
    console.log("Enter parent constructor")
    this.species = "homo sapiens"
  }

  eat() {
    console.log("Eat");
  }
}

class Engineer extends person {

  constructor(branch) {
    console.log("Enter child constructor");
    super();   // To invoke parent class constructor.
    this.branch = branch;
    console.log("Enter exit constructor"); 
  }
  work() {
    console.log("Make something different");
  }
}