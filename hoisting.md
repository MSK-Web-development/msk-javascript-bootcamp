# Hoisting
## Definition:-
Hoisting is a js mechanism where variables and 
functions are  moved to the top of their scope before execution.

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
