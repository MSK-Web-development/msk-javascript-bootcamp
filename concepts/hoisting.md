# Hoisting:

Hoisting is a JavaScript mechanism where variables and function declarations are moved to the top of their containing scope during the compilation phase. However, only the declarations are hoisted, not the initializations.

```javascript
console.log(x); // undefined
var x = 10;
console.log(x); // 10
```

In the above example, even though `x` is logged before its declaration, it doesn't throw an error. This is because during hoisting, the variable `x` is moved to the top of its scope, resulting in the first `console.log()` statement printing `undefined`.

Function declarations are also hoisted:

```javascript
myFunction(); // "Hello, World!"

function myFunction() {
  console.log("Hello, World!");
}
```

### Summary:

- **Hoisting**: Variables and function declarations are moved to the top of their containing scope during compilation. Only declarations are hoisted, not initializations.