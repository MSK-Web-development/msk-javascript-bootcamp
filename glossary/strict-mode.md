# Strict mode

Strict mode is a feature in JavaScript that allows you to opt into a stricter set of rules and behaviors for your code. It helps catch common coding errors and prevents potentially dangerous behaviors, making your code more robust and secure.

### Overview

- **Enabling Strict Mode**: You can enable strict mode for an entire script or for individual functions by adding the string `"use strict";` at the beginning of the script or function.

- **Key Features**:
  1. **Restrictive Syntax**: Strict mode enforces stricter syntax rules, such as disallowing the use of undeclared variables, deprecated features, and unsafe actions.
  2. **Error Handling**: It throws more errors for common mistakes, such as assigning values to read-only properties, duplicating parameter names, and using reserved keywords as variable names.
  3. **Performance Optimizations**: Some JavaScript engines can apply optimizations when strict mode is enabled, potentially improving the performance of your code.
  4. **Security Enhancements**: Strict mode mitigates some security risks by preventing certain actions that could lead to vulnerabilities, such as accessing the global object in unexpected ways.

### Examples

1. **Enabling Strict Mode for an Entire Script**:

```javascript
"use strict";

// Strict mode enabled for the entire script
// Any code below this line will adhere to strict mode rules
```

2. **Enabling Strict Mode for a Function**:

```javascript
function strictModeFunction() {
  "use strict";

  // Strict mode enabled for this function only
}
```

3. **Error Throwing in Strict Mode**:

```javascript
"use strict";

// Throws an error: Assigning to a read-only property
const obj = {};
Object.defineProperty(obj, "x", { value: 42, writable: false });
obj.x = 50; // TypeError: Cannot assign to read-only property

// Throws an error: Duplicating parameter names
function duplicateParams(a, a) {
  return a + a; // SyntaxError: Duplicate parameter name not allowed in this context
}

duplicateParams(2, 3);
```

4. **Preventing Global Object Pollution**:

```javascript
"use strict";

// Throws an error: Using 'this' in global scope
function logThis() {
  console.log(this); // TypeError: 'this' is not defined
}

logThis();
```

5. **Eliminating Implicit Global Variables**:

```javascript
"use strict";

// Throws an error: Accessing undeclared variable
function strictModeTest() {
  implicitVar = 10; // ReferenceError: implicitVar is not defined
}

strictModeTest();
```

### Conclusion

Strict mode in JavaScript provides developers with a safer and more predictable environment for writing code. By enabling strict mode, you can catch errors early, improve code quality, and enhance the security and performance of your JavaScript applications. It's recommended to use strict mode in all modern JavaScript projects to leverage its benefits and ensure better code consistency and reliability.
