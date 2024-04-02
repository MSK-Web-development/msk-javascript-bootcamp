/***********************************************************
MAIN DEFINITION

- The constructor property returns a reference to the constructor function that created the instance.
- It's useful for checking the type of an object or for creating new instances of the same type.
- It is used if we want to check whether an object is created using a certain function as constructor.
***********************************************************/
function Car(make, model) {
  this.make = make;
  this.model = model;
}
const myCar = new Car("Toyota", "Corolla");
console.log(myCar.constructor === Car); // Output: true
