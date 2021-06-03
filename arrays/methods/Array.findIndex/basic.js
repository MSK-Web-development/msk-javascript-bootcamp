/*
 It returns the index of an element found and which satisfies the test 
 function passed as an argument or -1 if none satisfies it.
*/

const num = ["apple", "banana", "cake"];

let result = num.findIndex((element) => element === "apple");
console.log(result);
