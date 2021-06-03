/*
The splice() method changes the contents of an array by removing or replacing existing
elements and/or adding new elements

The original array gets mutated with remaining items after deletion

Syntax :

let arrDeletedItems = arr.splice(start, deleteCount, item1, item2, ...)

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
