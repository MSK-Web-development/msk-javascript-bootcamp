# IIFE

IIFE stands for **Immediately Invoked Function Expressions**. It is a JavaScript function that runs as soon as it is defined. <br> IIFE is also known as a **Self-Executing Anonymous Function** or **Self-Invoked Anonymous Function**.

<br>

---
<br>

## Different ways of defining IIFE

    (function () {
        statements
    })();

<br>

    (function() {
        statements
    }());

<br>

    (() => { statements })();

<br>

---
<br>

## Regular Function v/s IIFE
    // Creation of Regular Function
    function greet() {
        console.log("Hi!, I'm a regular function");
    };
    // Execution of Regular Function
    greet();

    // IIFE creation and execution
    (function () { console.log("Hi!, I'm a IIFE") })();
    

<br>

    // Output: 
    Hi!, I'm a regular function
    Hi!, I'm a IIFE

<br>

---
<br>

## Code snippets

### Named IIFE
    (funtion greet() {
        console.log("Hello Tom");   // Output: Hello Tom
    })();

### IIFE as a variable function
    var greet = (function () {
        return "Hello Mike";
    })();

    console.log(greet);     // Output: Hello Mike

### IIFE with arguments
    var name_var = "Steev";
    (function (name_arg) {
        console.log(`Hello ${name_arg}`);   // Output: Hello Steev
    })(name_var)

<br>

---
<br>

## Advantages of IIFE:
- Do not create unnecessary global variables and functions.
- Functions and variables defined in IIFE do not conflict with other functions and variables even if they have same name.
- Organize JavaScript code and make JavaScript code maintainable.

<br>

---
<br>

## References (Get to know more about IIFE):
- [Immediately invoked function expression - Wikipedia](https://en.wikipedia.org/wiki/Immediately_invoked_function_expression)
- [IIFE - MDNWeb Docs](https://developer.mozilla.org/en-US/docs/Glossary/IIFE)
- [IIFE pattern - MSK Bootcamp](https://youtu.be/kmP4z1LJEKs?t=8083)