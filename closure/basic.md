## Closures

Closures are a fundamental concept in JavaScript that involve the combination of functions and their lexical environment, enabling functions to retain access to variables from their enclosing scope even after the parent function has finished executing. Let's delve into closures with multiple examples:

### Example 1: Basic Closure

```javascript
function outerFunction() {
  let outerVariable = "I am from outer function";

  function innerFunction() {
    console.log(outerVariable);
  }
  return innerFunction;
}

const closure = outerFunction();
closure(); // Output: "I am from outer function"
```

In this example, `innerFunction` is defined inside `outerFunction`. When `outerFunction` is called, it returns `innerFunction`. Despite `outerFunction` finishing its execution, `innerFunction` still retains access to `outerVariable`, forming a closure.

### Example 2: Closure with Parameters

```javascript
function greetingMaker(greeting) {
  return function (name) {
    console.log(greeting + ", " + name + "!");
  };
}

const greetInEnglish = greetingMaker("Hello");
const greetInSpanish = greetingMaker("Hola");

greetInEnglish("John"); // Output: "Hello, John!"
greetInSpanish("Maria"); // Output: "Hola, Maria!"
```

Here, `greetingMaker` returns a function that accepts a `name` parameter. The returned function forms a closure over the `greeting` variable, allowing different greetings to be stored and used independently.

### Example 3: Asynchronous Closure

```javascript
function counter() {
  let count = 0;

  function increment() {
    count++;
    console.log(count);
  }

  setTimeout(increment, 1000);
}

counter(); // Output: 1 (after 1 second)
```

Even though `counter` function finishes execution before the `setTimeout` callback executes `increment`, `increment` still retains access to `count` via closure, allowing it to increment and log the count.

### Example 4: Loop and Closure

```javascript
function createIncrementFunctions() {
  const incrementFunctions = [];

  for (let i = 0; i < 5; i++) {
    incrementFunctions.push(function () {
      console.log(i);
    });
  }

  return incrementFunctions;
}

const incrementers = createIncrementFunctions();
incrementers[0](); // Output: 0
incrementers[1](); // Output: 1
// ...
incrementers[4](); // Output: 4
```

Despite the loop finishing execution, each function stored in `incrementFunctions` retains a closure over the `i` variable, resulting in each function logging its corresponding value of `i` when called.

These examples demonstrate the versatility and power of closures in JavaScript, enabling encapsulation, data privacy, and the creation of higher-order functions. Understanding closures is crucial for writing clean, modular, and maintainable code in JavaScript.
