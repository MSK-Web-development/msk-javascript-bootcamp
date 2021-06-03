/*
? Description


? Uses
Used to spread the state in react app to avoid mutation.

*/

let numberStore = [0, 1, 2];
let newNumber = 12;
let newNumberStore = [...numberStore, newNumber];

console.log(newNumberStore); // [ 0, 1, 2, 12 ]
