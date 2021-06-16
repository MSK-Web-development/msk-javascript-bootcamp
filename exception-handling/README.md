# :exclamation: Error/Exception Handling in Javascript

We need to explicitly handle exception in Javascript.
Error/Exception Handling is one of the Crucial Topic in Javascript.

## :ghost: Let's Understand about Errors

While coding, there can be three types of errors in the code:

1. **Syntax Error:** When a user makes a mistake in the pre-defined syntax of a programming language or using method/function with undefined variable, a syntax error may appear.
2. **Runtime Error:** When an error occurs during the execution of the program, such an error is known as Runtime error. The codes which create runtime errors are known as Exceptions. Thus, exception handlers are used for handling runtime errors.
3. **Logical Error:** An error which occurs when there is any logical mistake in the program that may not produce the desired output, and may terminate abnormally. Such an error is known as Logical error.

## :monocle_face: Error/Exception Handling Statements

There are following statements that handle if any exception occurs:

- `throw` statements
- `try...catch` statements
- `try...catch...finally` statements.

With Promise we can handle error with:

- `.then().catch()`
- `try...catch` with `async-await`

## :grimacing: Error Object

When a runtime error occurs, it creates and throws an Error object. Such an object can be used as a base for the user-defined exceptions too. An error object has two properties:

1. **name:** This is an object property that sets or returns an error name.
2. **message:** This property returns an error message in the string form.
3. **stack:** This property returns the stack/tree/trace of error's origin

## :shushing_face: Error `new Error()`

Error is a generic constructor, there are following standard built-in error types or error constructors beside it:

- **EvalError:** It creates an instance for the error that occurred in the `eval()`, which is a global function used for evaluating the js string code.
- **InternalError:** It creates an instance when the js engine throws an internal error.
- **RangeError:** It creates an instance for the error that occurs when a numeric variable or parameter is out of its valid range.
- **ReferenceError:** It creates an instance for the error that occurs when an invalid reference is de-referenced.
- **SyntaxError:** An instance is created for the syntax error that may occur while parsing the `eval()`.
- **TypeError:** When a variable is not a valid type, an instance is created for such an error.
- **URIError:** An instance is created for the error that occurs when invalid parameters are passed in `encodeURI()` or `decodeURI()`.

## :computer: Code Snippet with Output

### :pushpin: Basic try...catch block Code Snippet

**:chart_with_upwards_trend: Real-Life Example :**

- Database Connection

```js
try {
  // ... the Code which you are unsure or might throw error
  let test = "String";
  console.log(test.toUpperCase());
  console.log(tes.toUpperCase()); // variable is not defined
} catch (err) {
  // catching the error thrown in the subsequent try block
  // error occurred in the catch block will not be handled by catch block
  console.log("\n\nI am From Error");
  console.log("Error Object:", err); // Error Object
  console.log("Error Name:", err.name); // Error Name : Name of the error
  console.log("Error Message:", err.message); // Error Message : Message of the error
  console.log("Error Stack:", err.stack); // Error Stack : Stack Trace of where the error occurred in the code file.
}
// Real-Life Example : Database Connection
```

### :memo: Output

```bash
STRING


I am From Error
Error Object: ReferenceError: tes is not defined
    at Object.<anonymous> (\msk-javascript-bootcamp\exception-handling\exception-handling.js:12:15)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
Error Name: ReferenceError
Error Message: tes is not defined
Error Stack: ReferenceError: tes is not defined
    at Object.<anonymous> (\msk-javascript-bootcamp\exception-handling\exception-handling.js:12:15)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
```

### :pushpin: Throwing User Defined Error

**:chart_with_upwards_trend: Real-Life Example :**

- Throwing Validation Error

```js
// Throwing User Defined Error
try {
  let age = 10;
  if (age >= 18) {
    console.log("You are eligible for voting");
  } else {
    console.log("You are not eligible");
    throw "You are not eligible"; // throw will throw an general Error without Error Object
    // If we want to send as an object we can send it too. But Error Stack won't be there ;p We Don't know when & where it will happen.
    // throw { name: "Developer", message: "You are not eligible" };
  }
} catch (err) {
  console.log("\n\nI am From Error");
  console.log("Error Object:", err);
  console.log("Error Name:", err.name);
  console.log("Error Message:", err.message);
  console.log("Error Stack:", err.stack);
}
// Real-Life Example : Throwing Validation Error
```

### :memo: Output

```bash
You are not eligible


I am From Error
Error Object: You are not eligible
Error Name: undefined
Error Message: undefined
Error Stack: undefined
```

### :pushpin: Throwing User Defined Error with Error Constructor

**:chart_with_upwards_trend: Real-Life Example :**

- To throw an semantic error rather than just logging.
- Backend-Server Programming.

```js
// Throwing User Defined Error with Error Constructor
try {
  let age = 10;
  if (age >= 18) {
    console.log("You are eligible for voting");
  } else {
    console.log("You are not eligible");
    throw new Error("You are not Eligible");
    // Error is a generic constructor which will create Generic Error Object
  }
} catch (err) {
  console.log("\n\nI am From Error");
  console.log("Error Object:", err);
  console.log("Error Name:", err.name);
  console.log("Error Message:", err.message);
  console.log("Error Stack:", err.stack);
}
// Real-Life Example : To throw an semantic error rather than just logging.
// Real-Life Example : Backend-Server Programming
```

### :memo: Output

```bash
You are not eligible


I am From Error
Error Object: Error: You are not Eligible
    at Object.<anonymous> (\msk-javascript-bootcamp\exception-handling\exception-handling.js:27:11)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
Error Name: Error
Error Message: You are not Eligible
Error Stack: Error: You are not Eligible
    at Object.<anonymous> (\msk-javascript-bootcamp\exception-handling\exception-handling.js:27:11)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
```

### :pushpin: try...catch...finally Snippet

**Real Life Example :**

- To close the Server or Connection irrespective of Output

```js
// try-catch-finally
try {
  let marks = 30;
  if (marks >= 35) {
    console.log("Congratulations! You Passed.");
  } else {
    throw new Error("Opps! Sorry, Better Luck Next Time.");
  }
} catch (err) {
  console.log("\nI am From Error");
  console.log("Error Object:", err);
  console.log("Error Name:", err.name);
  console.log("Error Message:", err.message);
  console.log("Error Stack:", err.stack);
} finally {
  // finally will be executed whether code is with error or with no error
  console.log("\n\nI am from Finally.");
  console.log("I am stubborn whether No Error or Error I will be executed");
  console.log("Test Over");
}
// Real Life Example : To close the Server or Connection irrespective of Output
```

### :memo: Output

```bash
I am From Error
Error Object: Error: Opps! Sorry, Better Luck Next Time.
    at Object.<anonymous> (\msk-javascript-bootcamp\exception-handling\exception-handling.js:69:11)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47
Error Name: Error
Error Message: Opps! Sorry, Better Luck Next Time.
Error Stack: Error: Opps! Sorry, Better Luck Next Time.
    at Object.<anonymous> (\msk-javascript-bootcamp\exception-handling\exception-handling.js:69:11)
    at Module._compile (internal/modules/cjs/loader.js:1063:30)
    at Object.Module._extensions..js (internal/modules/cjs/loader.js:1092:10)
    at Module.load (internal/modules/cjs/loader.js:928:32)
    at Function.Module._load (internal/modules/cjs/loader.js:769:14)
    at Function.executeUserEntryPoint [as runMain] (internal/modules/run_main.js:72:12)
    at internal/main/run_main_module.js:17:47


I am from Finally.
I am stubborn whether No Error or Error I will be executed
Test Over
```

## Error/Exception Handling of Promise

**To know more about [Promise](./../promise)**

### :pushpin: try...catch block

```js
// Exception Handling of Promise
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    let a = 1 + 2;
    if (a == 2) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  }, 3000);
});

// with .then().catch().finally()
p.then((response) => {
  console.log(response);
})
  .catch((err) => {
    // Gets called when promise is rejected or an exception is thrown
    console.log("\nError:", err);
  })
  .finally(() => {
    console.log("\nCompleted promise");
    console.log("I am stubborn whether No Error or Error I will be executed");
  });
```

### :memo: Output

```bash
I am From Error
Error Object: Error: Failed
    at Timeout._onTimeout (\msk-javascript-bootcamp\exception-handling\exception-handling.js:95:14)
    at listOnTimeout (internal/timers.js:554:17)
    at processTimers (internal/timers.js:497:7)
Error Name: Error
Error Message: Failed
Error Stack: Error: Failed
    at Timeout._onTimeout (\msk-javascript-bootcamp\exception-handling\exception-handling.js:95:14)
    at listOnTimeout (internal/timers.js:554:17)
    at processTimers (internal/timers.js:497:7)

I am From Finally
I am stubborn whether No Error or Error I will be executed
```

### :pushpin: Using try-catch block with async await

**To know more about [Async-Await](./../async-await)**

**To know more about [IIFE](./../IIFE)**

```js
// Using try-catch block with async await
(async () => {
  try {
    const response = await p;
    console.log(response);
  } catch (err) {
    console.log("\nI am From Error");
    console.log("Error Object:", err);
    console.log("Error Name:", err.name);
    console.log("Error Message:", err.message);
    console.log("Error Stack:", err.stack);
  } finally {
    console.log("\n\nI am from Finally.");
    console.log("I am stubborn whether No Error or Error I will be executed");
  }
})(); // IIFE Method of Function Execution
```

### :memo: Output

```bash
I am From Error
Error Object: Error: Failed
    at Timeout._onTimeout (\msk-javascript-bootcamp\exception-handling\exception-handling.js:95:14)
    at listOnTimeout (internal/timers.js:554:17)
    at processTimers (internal/timers.js:497:7)
Error Name: Error
Error Message: Failed
Error Stack: Error: Failed
    at Timeout._onTimeout (\msk-javascript-bootcamp\exception-handling\exception-handling.js:95:14)
    at listOnTimeout (internal/timers.js:554:17)
    at processTimers (internal/timers.js:497:7)


I am from Finally.
I am stubborn whether No Error or Error I will be executed
```

## :round_pushpin: Reach

[![Shivam Panchal | LinkedIn](https://img.shields.io/badge/Shivam_Panchal-eeeeee?style=for-the-badge&logo=linkedin&logoColor=white&labelColor=0A66C2)][reach_linkedin]
[![GodWin1100 | GitHub](https://img.shields.io/badge/Godwin1100-eeeeee?style=for-the-badge&logo=github&logoColor=white&labelColor=181717)][reach_github]
[![shivamjpanchal1 | G Mail](https://img.shields.io/badge/shivamjpanchal1-eeeeee?style=for-the-badge&logo=gmail&logoColor=white&labelColor=EA4335)][reach_gmail]

<!-- Reach  -->

[reach_linkedin]: https://www.linkedin.com/in/shivam-panchal-godwin1100
[reach_gmail]: mailto:shivamjpanchal1@gmail.com?subject=GitHub%20Hello
[reach_github]: https://github.com/GodWin1100
