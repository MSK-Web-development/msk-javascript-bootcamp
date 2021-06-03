// Array is converted to a array of objects
// A comparision function is fed to sort

// The array to be sorted
var list = ['Delta', 'alpha', 'CHARLIE', 'bravo'];

// Temporary array holds objects with position and sort-value
var mapped = list.map(function (el, i) {
  return { index: i, value: el.toLowerCase() };
})

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

console.log(result) // Sorted array