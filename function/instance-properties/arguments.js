/***********************************************************
MAIN DEFINITION (🗑️ DEPRECATED, ⛔️ NOT_SUPPORTED)

- The arguments property is an array-like object containing the arguments passed to the function.
- It allows you to access all arguments, including those not explicitly declared in the function's parameter list.
- In strict mode, arrow, async, and generator functions, accessing the arguments property throws a TypeError. 
***********************************************************/
function sum() {
  console.log(arguments); // { '0': 1, '1': 2, '2': 3 }
  let total = 0;
  for (let i = 0; i < arguments.length; i++) {
    total += arguments[i];
  }
  return total;
}
console.log(sum(1, 2, 3)); // Output: 6
