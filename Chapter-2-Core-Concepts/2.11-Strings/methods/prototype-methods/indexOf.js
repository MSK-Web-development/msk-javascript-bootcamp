/*
Searches and (if found) returns the index number of the first searched character or 
substring within the string. 

If not found, -1 is returned. “Start” is an optional 
argument specifying the position within string to begin the search. Default is 0.*/

const str = "Cats are the best!";

console.log(str.indexOf("are")); // 5
console.log(str.indexOf("a")); // 1

console.log(str.indexOf("z")); // -1
