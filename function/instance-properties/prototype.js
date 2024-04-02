/***********************************************************
MAIN DEFINITION

- The prototype property allows you to add properties and methods to all instances of a function's constructor.
- It is used in conjunction with constructor functions and plays a key role in JavaScript's prototypal inheritance.
***********************************************************/
function Person(name) {
  this.name = name;
}

Person.prototype.sayHello = function () {
  console.log(`Hello, ${this.name}!`);
};

const person = new Person("John");
person.sayHello(); // Output: Hello, John!
