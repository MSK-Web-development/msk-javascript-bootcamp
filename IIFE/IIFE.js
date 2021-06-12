// --> Regular Function v/s IIFE <-- //
// Regular Function
function greet() {
    console.log("Hi!, I'm a regular function");     // Output: Hi!, I'm a regular function
};
greet();

// IIFE
(function () { console.log("Hi!, I'm a IIFE") })();     // Output: Hi!, I'm a IIFE

// ============================================================= //

// --> Code snippets <-- //
// Named IIFE 
(function greet() {
    console.log("Hello Tom");   // Output: Hello Tom
})();

// IIFE as a variable function
var greet = (function () {
    return "Hello Mike";
})();

console.log(greet);     // Output: Hello Mike

// IIFE with arguments
var name_var = "Steev";
(function (name_arg) {
    console.log(`Hello ${name_arg}`);   // Output: Hello Steev
})(name_var)
