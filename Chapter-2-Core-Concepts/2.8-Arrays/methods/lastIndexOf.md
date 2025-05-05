# Array.prototype.lastIndexOf()

## Overview

The `lastIndexOf()` method returns the last index at which a given element can be found in the array, or `-1` if it is not present. It uses strict equality (`===`) for comparison and searches from right to left.

---

## Syntax

```js
const index = array.lastIndexOf(searchElement[, fromIndex])
```

- **searchElement**: The value to locate in the array.
- **fromIndex** (optional): The index at which to start searching backwards. Defaults to `array.length - 1`. If negative, it is taken as the offset from the end of the array.

---

## Parameters

| Parameter     | Description                                 |
| ------------- | ------------------------------------------- |
| searchElement | The value to search for                     |
| fromIndex     | Index to start search from (default is end) |

---

## Usage

```js
const arr = [2, 5, 9, 2];
console.log(arr.lastIndexOf(2)); // 3
console.log(arr.lastIndexOf(7)); // -1
console.log(arr.lastIndexOf(2, 2)); // 0
```

---

## Examples

### Negative fromIndex

```js
const arr = [1, 2, 3, 2, 1];
console.log(arr.lastIndexOf(2, -2)); // 1 (starts at index 3)
```

### Strict Equality

```js
const arr = [1, "1", true, false];
console.log(arr.lastIndexOf("1")); // 1
console.log(arr.lastIndexOf(true)); // 2
```

### Not Found

```js
const arr = [1, 2, 3];
console.log(arr.lastIndexOf(4)); // -1
```

---

## Tips

- Uses strict equality (`===`) for comparison.
- Returns the last matching index, or `-1` if not found.
- Does not find `NaN` (use `includes()` for that).
- Searches from right to left.

---

## Do's and Don'ts

| Do                                  | Don't                                   |
| ----------------------------------- | --------------------------------------- |
| Use for finding the last index      | Use for existence only (use `includes`) |
| Use with primitives                 | Expect to find objects by value         |
| Use negative `fromIndex` for offset | Use for deep equality                   |

---

## When to Use

- When you need the last index of a value in an array.
- When you want to check the position of a primitive value from the end.

## When Not to Use

- When you need to check for existence only (use `includes`).
- When you need to find `NaN` (use `includes`).
- When you need deep equality for objects.

---

## Advanced

- Works on array-like objects.
- Returns `-1` for empty arrays or if not found.
- Use `indexOf()` to search from left to right.

---

## References

- [MDN lastIndexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/lastIndexOf)

---

> **Summary:**
> Use `lastIndexOf()` to find the last index of a value in an array. It is ideal for primitives and right-to-left searches.
