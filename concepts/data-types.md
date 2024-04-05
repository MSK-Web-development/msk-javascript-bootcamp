# Data Types in JavaScript

JavaScript is a dynamically typed language, meaning you don't need to explicitly declare the data type of a variable when you create it. The data type is determined by the value assigned to the variable. However, understanding different data types is crucial for writing efficient and maintainable JavaScript code. Here's a breakdown of the primary data types in JavaScript:

**1. Primitive Data Types:**

Primitive data types are fundamental building blocks of data in JavaScript. They represent a single value and are stored directly in memory. There are six main primitive data types:

- **String:** Represents textual data enclosed in single or double quotes.

```javascript
let name = "Alice";
let message = "Hello, world!";
```

- **Number:** Represents numeric values, including integers (whole numbers) and floating-point numbers (decimals).

```javascript
let age = 30;
let pi = 3.14159;
```

- **Boolean:** Represents logical values: `true` or `false`.

```javascript
let isLoggedIn = true;
let isValid = false;
```

- **Undefined:** Represents a variable that has been declared but not yet assigned a value.

```javascript
let firstName;
console.log(firstName); // Output: undefined
```

- **Null:** Represents the intentional absence of any object value.

```javascript
let emptyValue = null;
```

- **Symbol (ES6):** A unique and immutable identifier that cannot be re-assigned or converted to another type. Symbols are useful for creating private properties within objects.

```javascript
let sym1 = Symbol("unique");
let sym2 = Symbol("unique"); // These will be different symbols

console.log(sym1 === sym2); // Output: false
```

**2. Non-primitive Data Types:**

Non-primitive data types are reference types. They store references to locations in memory where the actual data is stored. These types allow you to create complex data structures. There are two main non-primitive data types:

- **Object:** An unordered collection of key-value pairs. Keys can be strings or symbols, and values can be any data type, including other objects.

```javascript
let person = {
  name: "Bob",
  age: 25,
  hobbies: ["reading", "coding"],
};
```

- **Array:** An ordered collection of items. Items can be of any data type, and you can access them using numerical indexes starting from 0.

```javascript
let colors = ["red", "green", "blue"];
let numbers = [1, 2, 3, 4];
```

**3. Special Data Types:**

There are two additional data types in JavaScript that don't strictly fit into the primitive or non-primitive categories:

- **Function:** A block of code that can be invoked to perform a specific task. Functions can take parameters and return values.

```javascript
function greet(name) {
  console.log("Hello, " + name + "!");
}

greet("Charlie");
```

- **BigInt (ES2020):** A data type that allows you to represent arbitrary-precision integers, useful for extremely large numbers that cannot be accurately stored using the Number type.

```javascript
let bigIntNum = 12345678901234567890n; // Add 'n' to the end to indicate BigInt
console.log(typeof bigIntNum); // Output: bigint
```

**How to Check Data Type?**

You can use the `typeof` operator to determine the data type of a variable in JavaScript.

```javascript
let x = 10;
console.log(typeof x); // Output: number

let y = "hello";
console.log(typeof y); // Output: string
```

**Key Points to Remember for Interviews:**

- JavaScript is dynamically typed, but understanding data types is essential for writing clean and efficient code.
- Primitive data types are fundamental building blocks (String, Number, Boolean, Undefined, Null, Symbol).
- Non-primitive data types are reference types (Object, Array).
- Use the `typeof` operator to check the data type of a variable.

By effectively using different data types, you can create well-structured JavaScript programs that handle various kinds of data.
