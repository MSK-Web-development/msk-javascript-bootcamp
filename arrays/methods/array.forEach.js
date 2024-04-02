/*
MAIN DEFINITION:

The forEach() method in JavaScript is used to iterate over elements of an array and execute a provided callback function once for each element.

*************************************************************
BASIC SYNTAX:

array.forEach(callback(currentValue, index, array), thisArg);

Parameters:
  callback: A function to execute on each element of the array.
  currentValue: The current element being processed in the array.
  index (Optional): The index of the current element being processed.
  array (Optional): The array forEach() was called upon.
  thisArg (Optional): An optional value to use as this when executing the callback function.

Return Value:
  forEach() does not return a new array. It modifies the original array in place.
  It returns undefined.
*************************************************************
*/

const numbers = [1, 2, 3, 4, 5];
numbers.forEach(function (num, index) {
  console.log(`Element at index ${index}: ${num}`);
});

// Output:
// Element at index 0: 1
// Element at index 1: 2
// Element at index 2: 3
// Element at index 3: 4
// Element at index 4: 5
