/*

=> Determines whether a string ends with the characters of a specified string, returning true or false as appropriate
*/

const str1 = 'Cats are the best!';

// The second arg 'length' (optional) determines where the string ends.
str1.endsWith('best', 17) // true

str1.endsWith('best!') // true
str1.endsWith('best') // false

