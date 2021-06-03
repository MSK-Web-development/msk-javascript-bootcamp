/*
? Description
The rest parameter syntax allows a function to accept an 
indefinite number of arguments as an array,

? Uses
Commonly used in server side functions where unknown arguments like
configurations need to be passed.

*/

function myFun(a, b, ...manyMoreArgs) {
    console.log("a", a);
    console.log("b", b);
    console.log("manyMoreArgs", manyMoreArgs); // [ 'three', 'four', 'five', 'six' ]
  }
  
  myFun("one", "two", "three", "four", "five", "six");
  