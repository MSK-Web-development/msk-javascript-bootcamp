const fruits = ["apple", "banana", "orange"];

const nuts = {
  name: "cashew",
  color: "white"
}

console.log(Array.isArray(fruits)); // true
console.log(Array.isArray(nuts)); // false
console.log(Array.isArray(Array.prototype)); //true

// Polyfill using string comparision
Array.isArray2 = function (arr) {
  return Object.prototype.toString.call(arr) === '[object Array]'
}
console.log(Array.isArray2(fruits)); // true

