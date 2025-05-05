/*
=> returns an integer between 0 and 65535 representing the UTF-16 code unit 
at the given index.

*/

const sentence = "The quick brown fox jumps over the lazy dog.";

let character = sentence.charCodeAt(4); // 113
sentence.charCodeAt(900); //NaN
sentence.charCodeAt(-1); //NaN
