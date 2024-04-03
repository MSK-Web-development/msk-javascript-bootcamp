const unsortedArray = [1, 6, 2, 9, 3, 10000, 4];

// This won't sort based on the numerical value
const wrongResult = unsortedArray.sort();
// Sorted array is built by converting the elements into strings, then comparing their sequences of UTF-16 code units values.

// In order to sort, we have to pass a comparison function

// Ascending
function compareNumbersAsc(a, b) {
  return a - b;
}

// Descending
function compareNumbersDec(a, b) {
  return b - a;
}

let rightResult = unsortedArray.sort(compareNumbersAsc);

/*************************************************** */
// Scenario - Sort object-value
var items = [
  { name: "Edward", value: 21 },
  { name: "Sharpe", value: 37 },
  { name: "And", value: 45 },
  { name: "The", value: -12 },
  { name: "Magnetic", value: 13 },
  { name: "Zeros", value: 37 },
];

function sortByValue() {
  return items.sort((a, b) => a.value - b.value);
}

function sortByName() {
  return items.sort((a, b) => {
    var nameA = a.name.toUpperCase(); // ignore upper and lowercase
    var nameB = b.name.toUpperCase(); // ignore upper and lowercase
    if (nameA < nameB) {
      return -1;
    }
    if (nameA > nameB) {
      return 1;
    }

    // names must be equal
    return 0;
  });
}

const result = sortByName();
console.log(result);

/*************************************************** */
// Scenario - Using-map
// Array is converted to a array of objects
// A comparision function is fed to sort

// The array to be sorted
var list = ["Delta", "alpha", "CHARLIE", "bravo"];

// Temporary array holds objects with position and sort-value
var mapped = list.map(function (el, i) {
  return { index: i, value: el.toLowerCase() };
});

// Sorting the mapped array containing the reduced values
mapped.sort(function (a, b) {
  if (a.value > b.value) {
    return 1;
  }
  if (a.value < b.value) {
    return -1;
  }
  return 0;
});

// Container for the resulting order
var result = mapped.map(function (el) {
  return list[el.index];
});

console.log(result); // Sorted array
