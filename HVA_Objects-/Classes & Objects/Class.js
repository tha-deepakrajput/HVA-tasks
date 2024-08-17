class ToyotaCar {
  constructor(brand, mileage) {
    console.log("Creating new object")
    this.brand = brand;
    this.mileage = mileage;
  }

  start() {
    console.log("Start")
  }

  stop() {
    console.log("Stop")
  }
}

let fortuner = new ToyotaCar("fortuner", 10);    // Constructor
console.log(fortuner);

let lexus = new ToyotaCar("lexus", 12);  // Constructor
console.log(lexus);