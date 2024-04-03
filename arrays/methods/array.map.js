// Example 1
// The Array.map() method creates a new array from an existing one.
// It loops through each item in the original array, transforms it in some way, and then pushes it into a new array. All of this happens behind-the-scenes.
// For example, let’s say you had an array of numbers, and you wanted to create a new array with the numbers doubled.

const numbers = [16, 24, 48];

const doubleNumbers = numbers.map(number => {
  return number * 2;
})

console.log(numbers);
// expected output: [16, 24, 48]

console.log(doubleNumbers);
// expected output: [32, 48, 96]

//==================================================================================================================================================================

// Example 2
// Parameters: 
// indexOptional: The index of the current element being processed in the array.

const fruits = ["apple", "banana", "orange"];

const juices = fruits.map((fruit, index) => {
  return (fruit + " juice in cup " + index)
})

console.log(juices);
// expected output: ["apple juice in cup 0","banana juice in cup 1","orange juice in cup 2"]
