# Array.prototype.indexOf()

## Overview

The `indexOf()` method returns the first index at which a given element can be found in the array, or `-1` if it is not present. It uses strict equality (`===`) for comparison and searches from left to right.

---

## Syntax

```js
const index = array.indexOf(searchElement[, fromIndex])
```

- **searchElement**: The value to locate in the array.
- **fromIndex** (optional): The index to start the search at. Defaults to `0`. If negative, it is taken as the offset from the end of the array.

---

## Parameters

| Parameter     | Description                               |
| ------------- | ----------------------------------------- |
| searchElement | The value to search for                   |
| fromIndex     | Index to start search from (default is 0) |

---

## Usage

```js
const arr = [2, 5, 9, 2];
console.log(arr.indexOf(2)); // 0
console.log(arr.indexOf(7)); // -1
console.log(arr.indexOf(2, 2)); // 3
```

---

## Examples

### Negative fromIndex

```js
const arr = [1, 2, 3, 4, 2];
console.log(arr.indexOf(2, -2)); // 4 (starts at index 3)
```

### Strict Equality

```js
const arr = [1, "1", true, false];
console.log(arr.indexOf("1")); // 1
console.log(arr.indexOf(true)); // 2
```

### Not Found

```js
const arr = [1, 2, 3];
console.log(arr.indexOf(4)); // -1
```

---

## Tips

- Uses strict equality (`===`) for comparison.
- Returns the first matching index, or `-1` if not found.
- Does not find `NaN` (use `includes()` for that).
- Searches from left to right.

---

## Do's and Don'ts

| Do                                  | Don't                                   |
| ----------------------------------- | --------------------------------------- |
| Use for finding the first index     | Use for existence only (use `includes`) |
| Use with primitives                 | Expect to find objects by value         |
| Use negative `fromIndex` for offset | Use for deep equality                   |

---

## When to Use

- When you need the index of a value in an array.
- When you want to check the position of a primitive value.

## When Not to Use

- When you need to check for existence only (use `includes`).
- When you need to find `NaN` (use `includes`).
- When you need deep equality for objects.

---

## Advanced

- Works on array-like objects.
- Returns `-1` for empty arrays or if not found.
- Use `lastIndexOf()` to search from right to left.

---

## References

- [MDN indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf)

---

> **Summary:**
> Use `indexOf()` to find the first index of a value in an array. It is ideal for primitives and left-to-right searches.
