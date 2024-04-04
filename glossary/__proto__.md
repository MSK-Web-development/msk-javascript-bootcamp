 ## `__proto__` (dunder proto)

In JavaScript, `__proto__` is a special property that exists on all objects. It allows an object to access its prototype—the object it inherits properties and methods from. Here's an explanation of `__proto__`:

#### 1. Purpose

- `__proto__` provides a way to access an object's prototype directly. It allows you to traverse the prototype chain manually.

#### 2. Prototype Chain

- Every object in JavaScript has a prototype, which itself may have a prototype, forming a chain.
- `__proto__` points to the object's prototype in the prototype chain.

#### 3. Accessing Properties and Methods

- Properties and methods not found directly on an object are looked up in its prototype using the `__proto__` property.
- If a property or method is not found in the object, JavaScript traverses the prototype chain through `__proto__` until it finds the property or reaches the end of the chain.

#### 4. Setting Prototype

- While `__proto__` allows you to access the prototype of an object, it's not recommended for setting the prototype directly.
- Instead, `Object.create()` or constructor functions (`new` keyword) should be used to create objects with a specific prototype.

#### 5. Compatibility

- Although widely supported, the use of `__proto__` is considered deprecated in favor of `Object.getPrototypeOf()` and `Object.setPrototypeOf()` methods introduced in ECMAScript 5.

#### Examples:

##### Example 1: Accessing Prototype Properties

```javascript
const parent = {
  greeting: "Hello",
};

const child = {};
child.__proto__ = parent;

console.log(child.greeting); // Output: Hello
```

---

##### Example 2: Setting Prototype using Object.create()

```javascript
const parent = {
  greeting: "Hello",
};

const child = Object.create(parent);
console.log(child.greeting); // Output: Hello
```

---

##### Example 3: Using Constructor Functions

```javascript
function Parent() {}
Parent.prototype.greeting = "Hello";

const child = new Parent();
console.log(child.greeting); // Output: Hello
```

---

##### Example 4: Avoiding Direct Manipulation of **proto**

```javascript
const parent = {
  greeting: "Hello",
};

const child = {};
Object.setPrototypeOf(child, parent);

console.log(child.greeting); // Output: Hello
```

---
## Summary
- __proto__ provides direct access to an object's prototype, allowing traversal of the prototype chain.
- While useful for understanding prototype inheritance, its use for setting prototypes directly is discouraged in favor of Object.create() and Object.setPrototypeOf()