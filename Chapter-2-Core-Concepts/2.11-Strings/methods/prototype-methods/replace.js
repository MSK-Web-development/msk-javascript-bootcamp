/*
 Replaces specified value with another value in a string.
*/

const str = "JavaScript is amazing";

console.log(str.replace("JavaScript", "Css")); // [ 'Css is amazing' ]

//! Case sensitive
console.log(str.replace("Javascript", "Css")); // [ 'JavaScript is amazing' ]
