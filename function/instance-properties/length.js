/***********************************************************
MAIN DEFINITION

- The length property returns the number of parameters expected by the function.
- It does not include rest parameters (...args) or parameters with default values.
- This property is often used to determine the arity (number of arguments) of a function.
***********************************************************/

function add(x, y) {}
console.log(add.length); // Output: 2

function greet(name, message = "Hello") {}
console.log(greet.length); // Output: 1 (default parameter not counted)
