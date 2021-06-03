let myString = "bluebells";

// Attempting to assign a value to a string's 
// .length property has no observable effect. 
myString.length = 4;
console.log(myString);
// expected output: "bluebells"

console.log(myString.length);
// expected output: 9