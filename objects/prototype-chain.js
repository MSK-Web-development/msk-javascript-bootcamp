/*
 ? Notes
    1. Prototypes are the mechanism by which JavaScript objects inherit features from one another.
    
    2. To provide inheritance, objects can have a prototype object, which acts as a template object that it inherits methods and properties from. This is often referred to as a prototype chain.
̉̉̉̉̉
*/


// constructor function
function Person () {
    this.name = 'John',
    this.age = 23
}

// creating objects
const person1 = new Person();
const person2 = new Person();

// adding property to constructor function
Person.prototype.gender = 'male';

// prototype value of Person
console.log(Person.prototype);

// inheriting the property from prototype
console.log(person1.gender);
console.log(person2.gender);


/* 
Expected output

{ gender: "male" }
male
male

*/

