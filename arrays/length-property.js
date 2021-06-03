// Array.length property

const fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // 3

fruits.length = 4;

console.log("The new length after modification is:")
console.log(fruits.length); // 4

console.log("Looping through...")
fruits.forEach(fruit => {
  console.log(fruit);
});

/* Output
apple
banana
orange
*/


// Note: The extra item is a non-iterable empty slot