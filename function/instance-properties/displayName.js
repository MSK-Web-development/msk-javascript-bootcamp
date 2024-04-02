/***********************************************************
MAIN DEFINITION (⛔️ NOT_SUPPORTED)

- The displayName property returns the display name of the function, which is often the same as the name property but can be modified using the Function.displayName property.
- It's primarily used for debugging and introspection.
***********************************************************/
function greet() {}
console.log(greet.displayName); // Output: "greet"

greet.displayName = "shout";
console.log(greet.displayName); // Output: Shout
console.log(greet.name); // Output: "greet"
