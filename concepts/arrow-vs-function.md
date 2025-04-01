### **🚀 Arrow Functions vs Normal Functions in JavaScript**

JavaScript has **two types of functions**:  
🔹 **Arrow Functions (`=>`)**  
🔹 **Normal (Traditional) Functions (`function` keyword)**

Both have **key differences** in terms of `this` binding, arguments handling, behavior, and usage.

---

## **🔍 Key Differences Between Arrow and Normal Functions**

| Feature                                        | **Arrow Function (`=>`)**                             | **Normal Function (`function` keyword)**                   |
| ---------------------------------------------- | ----------------------------------------------------- | ---------------------------------------------------------- |
| **`this` Binding**                             | Inherits `this` from its surrounding (lexical scope). | Has its own `this`, determined dynamically.                |
| **`arguments` Object**                         | ❌ Not available (use rest `...args`).                | ✅ Available by default.                                   |
| **Usage as Constructor (`new`)**               | ❌ Cannot be used with `new`.                         | ✅ Can be used with `new`.                                 |
| **Binding with `call()`, `apply()`, `bind()`** | ❌ Cannot change `this` with these methods.           | ✅ `this` can be explicitly set.                           |
| **Implicit Return**                            | ✅ Supports concise syntax without `{}`.              | ❌ Must use `return` explicitly unless in arrow shorthand. |
| **Hoisting**                                   | ❌ Not hoisted (must be defined before use).          | ✅ Hoisted (can be used before declaration).               |

---

## **📌 Code Examples**

### **1️⃣ `this` Behavior**

#### **🛑 Normal Function (`this` changes)**

```javascript
const obj = {
  value: 10,
  normalFn: function () {
    console.log(this.value); // ✅ Works: 10
  },
};

obj.normalFn();
```

#### **✅ Arrow Function (`this` is inherited)**

```javascript
const obj = {
  value: 10,
  arrowFn: () => {
    console.log(this.value); // ❌ Undefined (inherits global `this`)
  },
};

obj.arrowFn();
```

### **2️⃣ `arguments` Object**

#### **🛑 Normal Function (Has `arguments`)**

```javascript
function normalFn() {
  console.log(arguments); // ✅ Works
}
normalFn(1, 2, 3);
```

#### **✅ Arrow Function (No `arguments`, use `...args`)**

```javascript
const arrowFn = (...args) => {
  console.log(args); // ✅ Works
};
arrowFn(1, 2, 3);
```

### **3️⃣ Constructor Usage (`new`)**

#### **🛑 Normal Function (Can be used with `new`)**

```javascript
function Person(name) {
  this.name = name;
}
const user = new Person("John");
console.log(user.name); // ✅ "John"
```

#### **❌ Arrow Function (Cannot be used with `new`)**

```javascript
const Person = (name) => {
  this.name = name;
};
const user = new Person("John"); // ❌ TypeError: Person is not a constructor
```

### **4️⃣ Implicit Return in Arrow Functions**

#### **✅ Short Syntax**

```javascript
const add = (a, b) => a + b;
console.log(add(3, 5)); // ✅ 8
```

#### **🛑 Normal Function Needs `return`**

```javascript
function add(a, b) {
  return a + b;
}
console.log(add(3, 5)); // ✅ 8
```

---

## **🧠 When to Use Which?**

✅ **Use Arrow Functions**

- Shorter syntax
- When `this` should not change (lexical `this`)
- Callbacks (e.g., `.map()`, `.filter()`, `.forEach()`)

✅ **Use Normal Functions**

- When `this` needs to refer to an object
- When using `arguments`
- When defining methods inside objects

---
