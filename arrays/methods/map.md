# Array.prototype.map()

## Overview

The `map()` method creates a new array populated with the results of calling a provided function on every element in the calling array. It does **not** modify the original array and is ideal for transforming data.

---

## Syntax

```js
const newArray = array.map(callback(currentValue, index, array), thisArg);
```

- **callback**: Function that produces an element of the new array, taking up to three arguments:
  - `currentValue`: The current element being processed.
  - `index` (optional): The index of the current element.
  - `array` (optional): The array `map()` was called upon.
- **thisArg** (optional): Value to use as `this` when executing `callback`.

---

## Parameters

| Parameter | Description                                   |
| --------- | --------------------------------------------- |
| callback  | Function to execute on each element           |
| thisArg   | Value to use as `this` in callback (optional) |

---

## Usage

```js
const arr = [1, 2, 3];
const doubled = arr.map((x) => x * 2);
console.log(doubled); // [2, 4, 6]
console.log(arr); // [1, 2, 3] (unchanged)
```

---

## Examples

### Basic Transformation

```js
const names = ["alice", "bob", "carol"];
const upper = names.map((name) => name.toUpperCase());
// upper: ['ALICE', 'BOB', 'CAROL']
```

### Using Index

```js
const arr = [10, 20, 30];
const withIndex = arr.map((num, idx) => num + idx);
// withIndex: [10, 21, 32]
```

### Mapping Objects

```js
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 30 },
];
const names = users.map((user) => user.name);
// names: ['Alice', 'Bob']
```

### Using `thisArg`

```js
const multiplier = {
  factor: 3,
};
const arr = [1, 2, 3];
const result = arr.map(function (x) {
  return x * this.factor;
}, multiplier);
// result: [3, 6, 9]
```

---

## Tips

- `map()` always returns a new array of the same length.
- Does not mutate the original array.
- Skips empty slots in sparse arrays.
- Can be chained with other array methods.

---

## Do's and Don'ts

| Do                             | Don't                               |
| ------------------------------ | ----------------------------------- |
| Use for transforming data      | Use for side effects only           |
| Chain with other array methods | Expect to mutate the original array |
| Return a value from callback   | Forget to return from callback      |

---

## When to Use

- When you want to transform each element of an array into a new value.
- When you need a new array based on the original.

## When Not to Use

- When you only need to perform side effects (use `forEach`).
- When you want to filter or reduce the array (use `filter` or `reduce`).

---

## Advanced

- Works on array-like objects.
- Callback is only called for elements with assigned values (skips holes).
- Can be used for deep transformations by combining with `map` recursively.

---

## References

- [MDN map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)

---

> **Summary:**
> Use `map()` to create new arrays by transforming each element. It is pure, chainable, and essential for functional programming in JavaScript.
