/*
Executes a search for a match within a string based on a regular expression. 
It returns an array of information or null if no match is found.

*/

//* General match
var str = "javascript is awesome";
console.log(str.match("is")); // 1

//* Regex
var intRegex = /[0-9 -()+]+$/;

var myNumber = "999";
var myInt = myNumber.match(intRegex);
console.log(myInt);
//output: 999

var myString = "999 JS Coders";
var myInt = myString.match(intRegex);
console.log(myInt);
//output: null
