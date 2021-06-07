// var

/*
    * variables created with "var" keyword are usually function scoped
    * i.e. variables defined in a function are not accessible outside of that function
*/

// Example 1

function getVarAge() {
    var age = 25;
    console.log(age); // 25
    return age;
}
console.log(age); // ! ReferenceError: age is not defined
console.log(getVarAge()); // 25


// Example 2

if (true) {
    var time = '7:30';
}
time = '7:31'; // since var is not block scoped, we can access time variable outside of if block
console.log(time); // 7:31





// let

/*
 * variables created with "let" keyword are usually block scoped
 * i.e. variables defined in a block are not accessible outside of that specific block
*/

// Example 1

console.log(age); // ! ReferenceError: Cannot access 'age' before initialization
let age = 25;
if (age > 18) {
    let isEligible = true;
    console.log(isEligible); // true
}
console.log(isEligible); // ! ReferenceError: isEligible is not defined





// const

/*
    * variables created with "const" keyword cannot be reassigned with a new value
    * const variables are needed to be initialised at the time of declaration
    * const variables are also block scoped similar to "let"
*/

// Example 1

const favLibrary = 'react';
favLibrary = 'angular'; // ! TypeError: Assignment to constant variable
console.log(favLibrary); // react


// Example 2

const myName; // ! SyntaxError: Missing initializer in const declaration
myName = 'javascript';


// Example 3

const obj = {
    name: 'barry allen',
    alias: 'flash'
};

obj = {}; // ! this is not possible because obj is a constant
obj.alias = 'the flash'; // this is possible because obj.alias is not a constant
console.log(obj); // { name: 'barry allen', alias: 'the flash' }


// Example 4

const day = 'saturday';
if (true) {
    const isChilling = true;
    console.log(isChilling); // true
}
console.log(isChilling); // ! ReferenceError: isChilling is not defined

