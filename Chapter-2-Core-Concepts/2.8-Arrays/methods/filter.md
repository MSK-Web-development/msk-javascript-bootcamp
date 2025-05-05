# Array.prototype.filter()

## Overview

The `filter()` method creates a new array with all elements that pass the test implemented by the provided function. It does not modify the original array and is ideal for extracting a subset of data based on a condition.

---

## Syntax

```js
const newArray = array.filter(callback(element, index, array), thisArg);
```

- **callback**: Function to test each element, taking up to three arguments:
  - `element`: The current element being processed.
  - `index` (optional): The index of the current element.
  - `array` (optional): The array `filter()` was called upon.
- **thisArg** (optional): Value to use as `this` when executing `callback`.

---

## Parameters

| Parameter | Description                                   |
| --------- | --------------------------------------------- |
| callback  | Function to test each element                 |
| thisArg   | Value to use as `this` in callback (optional) |

---

## Usage

```js
const arr = [1, 2, 3, 4, 5];
const even = arr.filter((x) => x % 2 === 0);
console.log(even); // [2, 4]
console.log(arr); // [1, 2, 3, 4, 5] (unchanged)
```

---

## Examples

### Filtering Numbers

```js
const numbers = [10, 15, 20, 25];
const over15 = numbers.filter((n) => n > 15);
// over15: [20, 25]
```

### Filtering Objects

```js
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
];
const activeUsers = users.filter((user) => user.active);
// activeUsers: [{ name: 'Alice', active: true }]
```

### Using Index

```js
const arr = ["a", "b", "c", "d"];
const evenIndex = arr.filter((el, idx) => idx % 2 === 0);
// evenIndex: ['a', 'c']
```

### Using `thisArg`

```js
const threshold = { min: 10 };
const arr = [5, 12, 18];
const result = arr.filter(function (x) {
  return x > this.min;
}, threshold);
// result: [12, 18]
```

---

## Tips

- `filter()` always returns a new array (possibly empty).
- Does not mutate the original array.
- Skips empty slots in sparse arrays.
- Can be chained with other array methods.

---

## Do's and Don'ts

| Do                             | Don't                               |
| ------------------------------ | ----------------------------------- |
| Use for extracting subsets     | Use for side effects only           |
| Return a boolean from callback | Forget to return from callback      |
| Chain with other array methods | Expect to mutate the original array |

---

## When to Use

- When you want to select elements that meet a condition.
- When you need a new array with only certain elements.

## When Not to Use

- When you want to transform elements (use `map`).
- When you want to accumulate a single value (use `reduce`).

---

## Advanced

- Works on array-like objects.
- Callback is only called for elements with assigned values (skips holes).
- Can be used for complex filtering logic.

---

## References

- [MDN filter()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)

---

> **Summary:**
> Use `filter()` to create a new array containing only elements that pass a test. It is pure, chainable, and essential for data selection in JavaScript.
