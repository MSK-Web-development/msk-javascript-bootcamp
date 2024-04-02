/***********************************************************
MAIN DEFINITION (🗑️ DEPRECATED, ⛔️ NOT_SUPPORTED)

- The caller property returns the function that invoked the current function.
- It's deprecated and not recommended for use, as it can cause performance issues and has limited browser support.
***********************************************************/
function outer() {
  inner();
}
function inner() {
  console.log(inner.caller); // Output: [Function: outer]
}
outer();
