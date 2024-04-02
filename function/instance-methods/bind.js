/***********************************************************
MAIN DEFINITION

The .bind() method creates a new function that, when called, has its this value set to the provided value, with a specified sequence of arguments 
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

const boundGreet = person.greet.bind(otherPerson, "Hello", "Mr");
boundGreet();
// Output: Hello Mr, Alice!
