
// The Array.of() method creates a new Array instance from a variable number of arguments, 
// regardless of number or type of the arguments.

// ES6

const singleElement = Array.of(8);
const multiElement = Array.of(8, 9);


console.log(singleElement) // [8]
console.log(multiElement) // [8, 9]

// Polyfill using Array.prototype

Array.of2 = function () {
  let vals = [];
  for (let prop in arguments) {
    vals.push(arguments[prop]);
  }
  return vals;
}

console.log(Array.of2(7));
