# Hoisting

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. However, only the declarations are hoisted, not the initializations.

In the given example:

```javascript
var owner = "Manoj";
console.log(color); // undefined
console.log(typeof RideCar); // function

function RideCar() {
  var rider = "Satish";

  function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
  }
  Car.prototype.accelerate = function () {
    console.log("Car speed increased ...");
    console.log(rider); // Satish
  };

  console.log(owner); // Manoj
  console.log(color); // undefined

  const myCar = new Car("Honda", "Accord", 1998);
  myCar.accelerate();
}

RideCar();

var color = "red";

console.log(rider); // Reference error rider is not defined
```

- Variable `owner` is declared using `var`, so its declaration (`var owner = "Manoj";`) is hoisted to the top of the scope.
- The function declaration `RideCar()` is also hoisted to the top.
- However, the initialization of `color` (`var color = "red";`) is not hoisted.

# Lexical Scope

Lexical scope refers to the visibility and accessibility of variables within nested functions based on their physical location within the code. In JavaScript, functions create their own lexical scopes, and they have access to variables defined in their outer scopes.

In the given example:

- Variables declared with `var` have function scope, meaning they are accessible within the function in which they are declared.
- Variables declared with `const` and `let` have block scope, meaning they are accessible only within the block in which they are declared.

### Compiler Passes:

JavaScript engines typically have multiple passes in their compilation process:

1. **First Pass**:

   - Identifies variable and function declarations and hoists them to the top of their scope.

2. **Second Pass**:
   - Executes the code line by line, assigning values to variables and executing functions.

In the given example:

- During the first pass, variable and function declarations (`owner`, `RideCar`, `Car`, `accelerate`) are hoisted to the top.
- During the second pass, the code is executed line by line, and the functions are invoked (`RideCar()`).
- Since `rider` is declared within the `RideCar` function, it is accessible within that function. However, `rider` is not accessible outside of `RideCar`.
- The attempt to access `color` before its declaration results in `undefined`.
- The attempt to access `rider` outside of its lexical scope results in a `ReferenceError`.

Understanding hoisting, lexical scope, and compiler passes is crucial for writing and debugging JavaScript code effectively. These concepts help in understanding how variables and functions are scoped and accessed within JavaScript programs.
