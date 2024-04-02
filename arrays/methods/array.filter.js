/* Definition
 creates a new array with all elements that pass the test implemented by the provided function.
 */

/* Syntax
 array.filter(callback(element, index, array), thisArg);
*/

const fruits = ["apple", "banana", "orange", "grape", "mango"];
const fruitsLengthLessThan5 = (fruit, index, array) => {
  fruits.push("watermelon"); // will NOT be affected
  fruits.pop(); // will be affected
  fruits[1] = "nut"; // will be affected

  return fruit.length < 6;
};
const newFruits = fruits.filter(fruitsLengthLessThan5);
// [ 'apple', 'grape', 'mango' ]

console.log(newFruits);

//Example:  Search with a substring in an array of strings
const searchInTheArray = (array, query) => {
  return array.filter((element) => {
    if (element.toLowerCase().includes(query.toLowerCase())) return element;
  });
};

const fruits = ["apple", "banana", "orange", "grape", "mango"];

console.log(searchInTheArray(fruits, "ap")); // [ 'apple', 'grape' ]

// Polyfill (Not important)
if (!Array.prototype.filter) {
  Array.prototype.filter = function (func, thisArg) {
    "use strict";
    if (!((typeof func === "Function" || typeof func === "function") && this))
      throw new TypeError();

    var len = this.length >>> 0,
      res = new Array(len), // preallocate array
      t = this,
      c = 0,
      i = -1;

    var kValue;
    if (thisArg === undefined) {
      while (++i !== len) {
        // checks to see if the key was set
        if (i in this) {
          kValue = t[i]; // in case t is changed in callback
          if (func(t[i], i, t)) {
            res[c++] = kValue;
          }
        }
      }
    } else {
      while (++i !== len) {
        // checks to see if the key was set
        if (i in this) {
          kValue = t[i];
          if (func.call(thisArg, t[i], i, t)) {
            res[c++] = kValue;
          }
        }
      }
    }

    res.length = c; // shrink down array to proper size
    return res;
  };
}
