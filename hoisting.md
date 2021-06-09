# Hoisting
## Definition:-
Hoisting is a javascript mechanism where variables and 
function declarations are  moved to the top of their scope before execution.

Variable Hoisting
Eg 
```
console.log(name); // undefined 

var name = 'Siddhi '; 
```

In the above code we tried to console the variable name which was declared and 
assigned later then using it,the compiler gives us undefined.

Function Hoisting
Eg 
```
Name("Chloe");

function Name(name) {
  console.log("My  name is " + name);
}
/*
The result of the code above is: "My  name is Chloe"
*/
```

Even though we call the function in our code first, before the function is written,
 the code still works. This is because of how context execution works in JavaScript.

Some links for details of Hoisting

https://developer.mozilla.org/en-US/docs/Glossary/Hoisting

https://www-geeksforgeeks-org.cdn.ampproject.org/v/s/www.geeksforgeeks.org/javascript-hoisting/amp/?amp_js_v=a6&amp_gsa=1&usqp=mq331AQHKAFQArABIA%3D%3D#aoh=16231581897293&referrer=https%3A%2F%2Fwww.google.com&amp_tf=From%20%251%24s&ampshare=https%3A%2F%2Fwww.geeksforgeeks.org%2Fjavascript-hoisting%2F
