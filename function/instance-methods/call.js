/***********************************************************
MAIN DEFINITION

The .call() method is used to invoke a function with a specified this value and arguments provided individually.
***********************************************************
BASIC SYNTAX:

function.call(thisArg, arg1, arg2, ...)
***********************************************************/

const person = {
  name: "John",
  greet: function (message, designation) {
    console.log(`${message} ${designation}, ${this.name}!`);
  },
};

const otherPerson = {
  name: "Alice",
};

person.greet.call(otherPerson, "Hello", "Mr");
// Output: Hello, Alice!
