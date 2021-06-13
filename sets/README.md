# Sets in javascript

Sets are a new object type with ES6 (ES2015) that allow creating collections of unique values. 
The values in a set can be either simple primitives like strings or integers as well as more complex object types like object literals or arrays.
<br>
It is an iterable object whose elements will be added to the new set. In case if the iterable is not provided or a null value is passed then the new set will be empty. 

<br>
The Set object provides the following useful methods:

add(value) – appends a new element with a specified value to the set. It returns the Set object, therefore, you can chain this method with another Set method.
<br>
clear()  – removes all elements from the Set object.
<br>
delete(value) – deletes an element specified by the value.
<br>
entries()– returns a new Iterator that contains an array of  [value, value] .
<br>
forEach(callback [, thisArg]) – invokes a callback on each element of the Set with the this value sets to thisArg in each call.
<br>
has(value) – returns true if an element with a given value is in the set, or false if it is not.
<br>
keys() – is the same as values() function.
<br>
Returns a new Iterator object that contains values of all elements stored in the insertion order.
