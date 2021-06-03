/*
 * Generators are functions that can be paused and then resumed
 */

function* generatorFn() {
  console.log("checkpoint 1");
  yield "Yield 1 executed ...";
  console.log("checkpoint 2");
  yield "Yield 2 executed ...";
  return "Returning";
}

let genFn = generatorFn();

let yield1 = genFn.next(); // "checkpoint 1"
console.log(yield1); // { value: 'Yield 1 executed ...', done: false }

let yield2 = genFn.next(); // "checkpoint 2"
console.log(yield2); // { value: 'Yield 2 executed ...', done: false }

let yield3 = genFn.next();
console.log(yield3); // { value: 'Returning', done: true }
