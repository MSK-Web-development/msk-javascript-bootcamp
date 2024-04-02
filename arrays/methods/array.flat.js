/*
This method flattens 1 level depth and returns a new array.

SYNTAX:
array.flat();
*/

const num = [1, 2, [3, 4], [5, 6, 7, [8, 9]]];

let result = num.flat();
console.log(result);
//Output: [ 1, 2, 3, 4, 5, 6, 7, [ 8, 9 ] ]

/**********************************************/
// Example - How to flatten a nested array ?
var inputArray = [1, 2, [3, 4, [5, 6]], 9];

// //* Method 1
let result = inputArray.flat(2);
console.log(result);

//* Method 2 | Recursion
let result = [];
function flattenArray(inputArray) {
  inputArray.forEach((element) => {
    if (Array.isArray(element)) {
      flattenArray(element);
    } else {
      result.push(element);
    }
  });
  return result;
}

console.log(flattenArray(inputArray));
