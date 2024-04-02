/*
MAIN DEFINITION:

The flatMap() method in JavaScript is a combination of two array methods: map() and flat(). It allows you to map each element of an array to a new value using a mapping function, and then flattens the result into a new array.

*************************************************************
BASIC SYNTAX:

const newArray = array.flatMap(callback(currentValue, index, array), thisArg);

Parameters:
    - callback: A function that accepts three arguments: currentValue, index, and array.
    - currentValue: The current element being processed in the array.
    - index (Optional): The index of the current element being processed.
    - array (Optional): The array flatMap() was called upon.
    - thisArg (Optional): An optional value to use as this when executing the callback function.

Return Value:
    - The flatMap() method returns a new array resulting from calling the provided callback function on each element of the original array, and then flattening the result into a single array.
*************************************************************
*/

const numbers = [1, 2, 3, 4, 5];
const mappedArray = numbers.map((x) => [x, x * 2]);
//Output: [ [ 1, 2 ], [ 2, 4 ], [ 3, 6 ], [ 4, 8 ], [ 5, 10 ] ]

const flatMappedArray = numbers.flatMap((x) => [x, x * 2]);
// Output: [1, 2, 2, 4, 3, 6, 4, 8, 5, 10]
