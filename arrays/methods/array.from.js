/***********************************************************
MAIN DEFINITION

- The Array.from() method in JavaScript is used to create a new array instance from an array-like or iterable object.
-  It allows you to convert array-like objects (such as NodeList, arguments objects, or strings) and iterable objects (such as Set or Map) into a real array.
***********************************************************
BASIC SYNTAX:

Array.from(arrayLike[, mapFn[, thisArg]]);

PARAMS:
    arrayLike: An array-like or iterable object to convert to an array.
    mapFn (Optional): A mapping function to call on each element of the array.
    It receives three arguments: element, index, and array.
    It's similar to the map() method, allowing you to transform each element of the array.
    thisArg (Optional): An optional value to use as this when executing the mapping function.

RETURN VALUE:
    Array.from() returns a new array instance populated with the elements of the array-like or iterable object.
***********************************************************/

const arrayLike = { 0: "a", 1: "b", 2: "c", length: 3 };
const newArray = Array.from(arrayLike);
console.log(newArray); // Output: ['a', 'b', 'c']
