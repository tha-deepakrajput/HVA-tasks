class person {

  // Everthing which is defined in this class the child elements can access it with extends keyword.
  constructor() {
    this.species = "homo sapiens"     // The child classes can access this constructor cuz it's defined in the parent class. 
  }
  eat() {
    console.log("Eat");
  }

  sleep() {
    console.log("Sleep");
  }

  work() {
    console.log("Go to office");
  }
}


class Engineer extends person {
  work() {
    console.log("Problem solving, Build something new");
  }
}

class Doctor extends person {
  work() {
    console.log("treat patients");
  }
}

let deepakobj = new Engineer();
let deepakRajputobj = new Doctor();
let rajputobj = new person();

deepakobj.eat();
deepakRajputobj.work();
rajputobj.work();


