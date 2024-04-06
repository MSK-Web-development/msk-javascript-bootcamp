# Exporting and Importing

JavaScript modules allow you to organize your code into reusable units. Exporting and importing are fundamental mechanisms for sharing functionality between modules. Here's a detailed explanation:

**1. Modules:**

Modules are files containing JavaScript code that can be imported and used in other parts of your application. Modules promote code reusability, modularity, and better code organization.

**2. Exporting:**

- The `export` keyword is used to define values, variables, functions, or classes from a module that can be accessed by other modules.
- There are two main ways to export from a module:

  - **Default Export:**
    - A module can only have one default export.
    - Use the `export default` syntax to define the default export value.

  ```javascript
  // module1.js
  export default function greet(name) {
    console.log("Hello, " + name + "!");
  }
  ```

  - **Named Exports:**
    - A module can have multiple named exports.
    - Use the `export` keyword followed by the identifier you want to export.

  ```javascript
  // module2.js
  export function sayHi(name) {
    console.log("Hi, " + name + "!");
  }

  export const message = "This is a message from module2.";
  ```

**3. Importing:**

- The `import` statement is used to import functionality from other modules into your current module.
- The syntax depends on whether you're importing the default export or named exports.

  - **Importing Default Export:**
    - Use the syntax `import defaultName from 'modulePath'`. You can give the imported value an alias using `as`.

  ```javascript
  // main.js
  import greeter from "./module1.js"; // Assuming module1.js is in the same directory

  greeter("Alice");
  ```

  - **Importing Named Exports:**
    - Use curly braces `{}` to specify the named exports you want to import. You can also give them aliases using `as`.

  ```javascript
  // main.js (continued)
  import { sayHi, message as module2Message } from "./module2.js";

  sayHi("Bob");
  console.log(module2Message);
  ```

**4. Key Points:**

- Modules typically use the `.js` extension, but technically any file extension can be used with the `type="module"` attribute in the script tag (`<script type="module" src="myModule.mjs"></script>`).
- You can import modules from external libraries or from your own project's codebase.
- Importing/exporting works with both CommonJS (older syntax) and ES Modules (ES6+). However, ES Modules offer a cleaner syntax and better compatibility with modern browsers.

**5. Example (using both default and named exports):**

**math.js:**

```javascript
export default function add(x, y) {
  return x + y;
}

export function subtract(x, y) {
  return x - y;
}
```

**calculator.js:**

```javascript
import calculate, { subtract as minus } from "./math.js";

const result1 = calculate(5, 3); // Calls the default export (add)
const result2 = minus(10, 2); // Uses the aliased named export

console.log("5 + 3 =", result1);
console.log("10 - 2 =", result2);
```

**Summary:**

Exporting and importing are essential concepts for building modular JavaScript applications. By understanding how to structure modules, define exports, and import functionality, you can create well-organized and reusable code. Using a combination of default and named exports allows for flexibility in how you share functionality between modules in your project.
