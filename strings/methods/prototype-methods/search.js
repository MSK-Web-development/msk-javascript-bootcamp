/*
Tests for a match in a string. 
It returns the index of the match, or -1 if not found.



*/

//* General search
var str = "javascript is awesome";
console.log(str.search("a")); // 1

//* Regex
var intRegex = /[0-9 -()+]+$/;

var myNumber = "999";
var isInt = myNumber.search(intRegex);
console.log(isInt);
//output: 0
