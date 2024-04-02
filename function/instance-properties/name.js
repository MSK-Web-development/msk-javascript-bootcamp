/***********************************************************
MAIN DEFINITION

- The name property returns the name of the function.
- If the function is anonymous, the name property returns an empty string.
- This property is particularly useful for debugging and introspection.
***********************************************************/

// Normal function
function greet() {}
console.log(greet.name); // Output: "greet"

// Anonymous function
console.log((() => {}).name); // Output: ""
