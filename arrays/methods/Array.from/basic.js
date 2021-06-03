
const fruits = ["apple", "banana", "orange"];
const freshFruits = Array.from(fruits); // Creates a new shallow copy

console.log(freshFruits);
console.log(fruits === freshFruits); // False

