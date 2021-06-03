/*
The following are some reasons why you might need to use dynamic import:

- Static imports increases loading time.
- Static imports increases memory usage.
- Some modules may not exist at load time.
- Import string may be constructed dynamically
- When the module being imported has side effects and you do not want those side effects unless some condition is true

*/

// Way 1

// To dynamically import a module, the import keyword may be called as a function. When used this way, it returns a promise.

let module = import("/modules/my-module.js");

module.then((module) => {
  // Do something with the module.
});

// Way 2
let module = await import("/modules/my-module.js");

let c = 100;

console.log(c);
