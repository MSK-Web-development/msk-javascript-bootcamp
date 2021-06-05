/**
The slice() method returns a new array from start index to end index without changing the source array

It takes 2 parameters which are completely optional:
start - starting index from where array needs to be sliced
end - last index till where array needs to be sliced (doesn't include the last index)

Syntax :

let newArray = arr.slice(start, end)

**/

// Example 1 - slice part of source array

const justiceLeague = ["flash", "green lantern", "superman", "batman", "wonder woman", "martian manhunter"];

// justiceLeague array will be sliced starting at index 2 till index 4 (end_index - 1) but not index 5(end_index)
const trinity = justiceLeague.slice(2, 5);

console.log(trinity); // ["superman", "batman", "wonder woman"]
console.log(justiceLeague); // ["flash", "green lantern", "superman", "batman", "wonder woman", "martian manhunter"]


// Example 2 - slice full array (shallow copies all elements to new array)

const avengers = ["captain america", "ironman", "thor", "hulk", "black widow", "hawkeye"];

console.log(avengers.slice()); // ["captain america", "ironman", "thor", "hulk", "black widow", "hawkeye"]

