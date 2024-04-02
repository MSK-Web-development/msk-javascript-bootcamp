/***********************************************************
MAIN DEFINITION

The .apply() method is used to invoke a function with a specified this value and arguments provided as an array like object.
***********************************************************
BASIC SYNTAX:

function.apply(thisArg, [argsArray])
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

person.greet.apply(otherPerson, ["Hello", "Mr"]);
// Output: Hello Mr, Alice!
