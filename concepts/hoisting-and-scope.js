/* 
 Example that demonstrates
 
 ? Hoisting
 ? Lexical scope
 ? Compiler passes

*/

var owner = "Manoj";
console.log(color); // undefined
console.log(typeof RideCar); // function

function RideCar() {
  var rider = "Satish";

  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  Car.prototype.accelerate = function () {
    console.log("Car speed increased ...");
    console.log(rider); // Satish
  };

  console.log(owner); // Manoj
  console.log(color); // undefined

  const myCar = new Car("Honda", "Accord", 1998);
  myCar.accelerate();
}

RideCar();

var color = "red";

console.log(rider); // Reference error rider is not defined
