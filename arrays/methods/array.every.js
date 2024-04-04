/***********************************************************
MAIN DEFINITION

The array.every() method in JavaScript is used to check whether all elements in an array pass a certain test implemented by a provided function.

***********************************************************
BASIC SYNTAX:

array.every(callback(element, index, array), thisArg);

PARAMS:
  callback: A function to test each element of the array. It should return a boolean value.
  element: The current element being processed in the array.
  index (Optional): The index of the current element being processed.
  array (Optional): The array every() was called upon.
  thisArg (Optional): An optional value to use as this when executing the callback function.

RETURN VALUE:
  The every() method returns true if all elements in the array pass the test implemented by the provided function. Otherwise, it returns false.
***********************************************************
  
Notes: 
  1. The every() method executes the provided callback function once for each element in the array until it finds one where the callback returns false, or until the end of the array is reached.
  2. If any invocation of the callback returns false, the every() method immediately returns false without checking the remaining elements.
  3. For an empty array, the every() method always returns true since there are no elements to test.
***********************************************************/

const array = [1, 2, 3, 4, 5];
const allGreaterThanZero = array.every((element) => element > 0);
console.log(allGreaterThanZero); // Output: true

/***********************************************************
SCENARIO: with thisArg:
***********************************************************/
const context = {
  threshold: 50,
};
const array = [60, 70, 80, 90];
const allGreaterThanThreshold = array.every(function (element) {
  return element > this.threshold;
}, context);
console.log(allGreaterThanThreshold); // Output: true

/***********************************************************
SCENARIO: Modifying / appending array items in the callback

Iteration happens only 3 times even if you append more items in the callback
***********************************************************/
const fruits = ["apple", "banana", "orange"];

const result = fruits.every((fruit, index, arr) => {
  arr.push("grapes" + index);
  console.log(arr);
  return typeof fruit === "string";
});

console.log(result);
/* Output
[ 'apple', 'banana', 'orange', 'grapes0' ]
[ 'apple', 'banana', 'orange', 'grapes0', 'grapes1' ]
[ 'apple', 'banana', 'orange', 'grapes0', 'grapes1', 'grapes2' ]
true
*/

/***********************************************************
SCENARIO: All array items popped off

Iteration stops if all elements are popped off
***********************************************************/
const fruits = ["apple", "banana", "orange"];

const result = fruits.every((fruit, index, arr) => {
  arr.pop();
  console.log(arr);
  return typeof fruit === "string";
});

console.log(result);
/* Output
[ 'apple', 'banana' ]
[ 'apple' ]
true
*/
