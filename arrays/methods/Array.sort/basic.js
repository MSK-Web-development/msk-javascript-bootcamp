const unsortedArray = [1, 6, 2, 9, 3, 10000, 4];

// This won't sort based on the numerical value
const wrongResult = unsortedArray.sort();
// Sorted array is built by converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// In order to sort, we have to pass a comparision function

// Ascending
function compareNumbersAsc(a, b) {
  return a - b;
}

// Descending
function compareNumbersDec(a, b) {
  return b - a;
}


let rightResult = unsortedArray.sort(compareNumbersAsc)

// Shorter syntax
rightResult = unsortedArray.sort((a, b) => a - b)

console.log(rightResult)