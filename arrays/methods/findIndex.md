# Array.prototype.findIndex()

## Overview

The `findIndex()` method returns the index of the first element in the array that satisfies the provided testing function. If no elements satisfy the condition, it returns `-1`. Iteration stops as soon as a match is found.

---

## Syntax

```js
const index = array.findIndex(callback(element, index, array), thisArg);
```

- **callback**: Function to execute on each value, taking up to three arguments:
  - `element`: The current element being processed.
  - `index` (optional): The index of the current element.
  - `array` (optional): The array `findIndex()` was called upon.
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
const arr = [5, 12, 8, 130, 44];
const index = arr.findIndex((element) => element > 10);
console.log(index); // 1
```

---

## Examples

### Finding the Index of an Object

```js
const users = [
  { id: 1, name: "Alice" },
  { id: 2, name: "Bob" },
];
const idx = users.findIndex((u) => u.id === 2);
// idx: 1
```

### No Match Found

```js
const arr = [1, 3, 5];
const idx = arr.findIndex((x) => x > 10);
// idx: -1
```

### Using `thisArg`

```js
const context = { min: 10 };
const arr = [5, 12, 8];
const idx = arr.findIndex(function (x) {
  return x > this.min;
}, context);
// idx: 1
```

---

## Tips

- Returns the index of the first matching element, or `-1` if none match.
- Stops iterating after the first match.
- Skips empty slots in sparse arrays.

---

## Do's and Don'ts

| Do                              | Don't                              |
| ------------------------------- | ---------------------------------- |
| Use to get the index of a match | Use for all matches (use `filter`) |
| Return a boolean from callback  | Forget to return from callback     |
| Use for quick index lookups     | Expect the element as result       |

---

## When to Use

- When you need the index of the first element that matches a condition.
- For quick index lookups in arrays of objects.

## When Not to Use

- When you want all matching elements (use `filter`).
- When you want the value (use `find`).

---

## Advanced

- Works on array-like objects.
- Callback is only called for elements with assigned values (skips holes).
- Iteration order is left-to-right.

---

## References

- [MDN findIndex()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/findIndex)

---

> **Summary:**
> Use `findIndex()` to retrieve the index of the first element in an array that matches a condition. It is ideal for quick index-based searches and lookups.
