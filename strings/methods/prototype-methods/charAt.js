/*
=> returns a new string consisting of the single UTF-16 code unit located at the specified offset into the string.

=> offset starts from 0.



*/

const sentence = 'The quick brown fox jumps over the lazy dog.';
let index = 4
let character = sentence.charAt(index) // q

// If index cannot be converted to Int, first character is returned.
sentence.charAt() // T
sentence.charAt(0) // T
sentence.charAt(true) // T
sentence.charAt(false) // T
sentence.charAt(500) // ""