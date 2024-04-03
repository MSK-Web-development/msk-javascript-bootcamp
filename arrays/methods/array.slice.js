/**
MAIN DEFINITION

the slice() method is used to extract a section of an array and return it as a new array without modifying the original array. 

*******************************************************
BASIC SYNTAX:

let newArray = arr.slice(start, end-1) 

PARAMS:
    - start: starting index from where array needs to be sliced
    - end: last index till where array needs to be sliced (doesn't include the last index)

RETURNS:
    - a new array

*********************************************************/

// Example 1 - slice part of source array

const justiceLeague = [
  "flash",
  "green lantern",
  "superman",
  "batman",
  "wonder woman",
  "martian manhunter",
];

const trinity = justiceLeague.slice(2, 5);

console.log(trinity);
//Output:  ["superman", "batman", "wonder woman"]

console.log(justiceLeague);
//Output:  ["flash", "green lantern", "superman", "batman", "wonder woman", "martian manhunter"] // Unaltered

// Example 2 - slice full array (shallow copies all elements to new array)
const avengers = [
  "captain america",
  "ironman",
  "thor",
  "hulk",
  "black widow",
  "hawkeye",
];

console.log(avengers.slice());
//Output:  ["captain america", "ironman", "thor", "hulk", "black widow", "hawkeye"]
