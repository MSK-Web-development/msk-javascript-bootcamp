/***********************************************************
MAIN DEFINITION:

The concat() method in JavaScript is used to merge two or more arrays into a new array without modifying the original arrays. 

***********************************************************
BASIC SYNTAX:

const newArray = array1.concat(array2, array3, ..., arrayN);

PARAMS:
    array1, array2, ..., arrayN: The arrays to be concatenated. These can be arrays or values to be added to the resulting array.

RETURN VALUE:
    Returns a new array containing the elements of the original arrays concatenated together.
***********************************************************

NOTES:
    1. It returns a new array with the elements.
    2. Does not mutate the original arrays.
    3. If any argument passed to concat() is not an array, it's treated as a single-element array and concatenated to the resulting array.
    4. Nested arrays are not flattened; they remain as separate elements within the resulting array.

***********************************************************/

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

console.log(array1.concat(array2)); // [ 1, 2, 3, 4, 5, 6 ]

/***********************************************************
CHAINING 

Since concat() returns a new array, you can chain multiple concat() calls together.
***********************************************************/
const array1 = [1, 2];
const array2 = [3, 4];
const array3 = [5, 6];
const concatenatedArray = array1.concat(array2).concat(array3);
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]

/***********************************************************
Concatenating Non-array Values:

If any argument passed to concat() is not an array, it's treated as a single-element array and concatenated to the resulting array.
***********************************************************/
const array = [1, 2, 3];
const concatenatedArray = array.concat(4, 5, 6);
console.log(concatenatedArray); // Output: [1, 2, 3, 4, 5, 6]
