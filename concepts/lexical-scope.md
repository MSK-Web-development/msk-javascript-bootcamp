# Lexical Scope

Lexical scope refers to the visibility and accessibility of variables within nested functions based on their physical location within the code. In JavaScript, functions create their own lexical scopes, and they have access to variables defined in their outer scopes.

```javascript
function outerFunction() {
  var outerVar = "I'm from outer function";

  function innerFunction() {
    console.log(outerVar); // Accessing outerVar from outer scope
  }

  innerFunction();
}

outerFunction(); // "I'm from outer function"
```

In this example, `innerFunction` has access to `outerVar`, defined in its outer scope (`outerFunction`), due to lexical scoping.

### Summary:

- **Lexical Scope**: Refers to the visibility and accessibility of variables within nested functions based on their physical location within the code. Functions create their own lexical scopes, and they have access to variables defined in their outer scopes.

Understanding hoisting and lexical scope is crucial for writing clean and maintainable JavaScript code. It helps in understanding variable accessibility and how functions interact with their surrounding environment.
