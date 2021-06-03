/*
? Type Operators

typeof - Returns the type of a variable.

instanceof - The instanceof operator tests to see if the prototype 
property of a constructor appears anywhere in the prototype chain of 
an object. The return value is a boolean value. 

*/

// Examples for typeof
console.log(typeof "abc"); // string
console.log(typeof 123); // number
console.log(typeof function () {}); // function
console.log(typeof {}); // object
console.log(typeof null); // object
console.log(typeof NaN); // number
console.log(typeof undefined); // undefined
console.log(typeof true); // boolean
console.log(typeof $); // undefined (function in browser console)

// Example for instanceof
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}

const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// expected output: true

console.log(auto instanceof Object);
// expected output: true
