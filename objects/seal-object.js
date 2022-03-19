/**
 * Theory
 * Object.seal() method seals a object, where you are not allowed 
 * to add/delete the existing properties. It gives you freedom to update
 * value for the properties present
 */

// create object to perform seal operation
const fakeObject = {
    fakeProperty: 'fakeValue'
};

console.log(fakeObject.fakeProperty); // fakeValue

Object.seal(fakeObject);

Object.isSealed(fakeObject) // true

fakeObject.newFakeProperty = 'newFakeValue';

console.log(fakeObject.newFakeProperty) // undefined (because fakeObject is sealed)

fakeObject.fakeProperty = 'updatedFakeProperty';

console.log(fakeObject.fakeProperty); // updatedFakeProperty

