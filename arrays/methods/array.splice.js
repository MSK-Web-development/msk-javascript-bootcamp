/*
MAIN DEFINITION:

The splice() method changes the contents of an array by removing or replacing existing
elements and/or adding new elements

The original array gets mutated with remaining items after deletion

********************************************************
BASIC SYNTAX :

array.splice(start, deleteCount, item1, item2, ...)

PARAMS:
    - start: The index at which to start modifying the array. If negative, it will begin that many elements from the end of the array.
    - deleteCount (optional): The number of elements to remove from the array. If omitted or if greater than the number of elements from start to the end of the array, all elements starting from start index to the end of the array will be removed.
    - item1, item2, ... (optional): Elements to add to the array. If specified, they will be inserted into the array at the specified start index.

********************************************************
*/

// Example 1

const months = ["a", "b", "c", "d", "e"];
let arrDeletedItems = months.splice(0, 2, "f");
console.log(arrDeletedItems); // ["a", "b"]
console.log(months); // [ 'f', 'c', 'd', 'e' ]

// Example 2

const months = ["a", "b", "c", "d", "e"];
let arrDeletedItems = months.splice(0, 3, "f", "g", "h");

console.log(arrDeletedItems); // ["a", "b", "c"]
console.log(months); // [ 'f', 'g', 'h', 'd', 'e' ]

// Example 3
//* Insertion at 0 - array length changes
//! Performance - Too slow

const months = ["a", "b", "c"];
let arrDeletedItems = months.splice(0, 0, "f");

console.log(arrDeletedItems); // []
console.log(months); // [ 'f', 'a', 'b', 'c' ]
