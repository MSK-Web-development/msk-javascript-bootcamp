# Array.prototype.slice()

## Overview

The `slice()` method returns a shallow copy of a portion of an array into a new array object selected from `start` to `end` (end not included). The original array is not modified.

---

## Syntax

```js
array.slice([start[, end]])
```

- **start** (optional): Zero-based index at which to start extraction. Defaults to 0.
- **end** (optional): Zero-based index before which to end extraction. `slice` extracts up to but not including `end`. Defaults to array.length.
- **Returns**: A new array containing the extracted elements.

---

## Usage

```js
const arr = [1, 2, 3, 4, 5];
const sliced = arr.slice(1, 3);
console.log(sliced); // [2, 3]
console.log(arr); // [1, 2, 3, 4, 5]
```

---

## Parameters

| Parameter | Description             |
| --------- | ----------------------- |
| start     | Start index (inclusive) |
| end       | End index (exclusive)   |

---

## Examples

### Basic usage

```js
let fruits = ["apple", "banana", "orange", "mango"];
let citrus = fruits.slice(1, 3);
// citrus: ['banana', 'orange']
```

### Omitting end

```js
let arr = [1, 2, 3, 4];
let result = arr.slice(2);
// result: [3, 4]
```

### Using negative indices

```js
let arr = [1, 2, 3, 4, 5];
let lastTwo = arr.slice(-2);
// lastTwo: [4, 5]
```

---

## Tips

- Does not modify the original array.
- Negative indices count from the end.
- Useful for copying arrays: `let copy = arr.slice()`

---

## Do's and Don'ts

| Do                           | Don't                   |
| ---------------------------- | ----------------------- |
| Use for shallow copying      | Expect deep copy        |
| Use for extracting subarrays | Use for modifying array |

---

## When to Use

- When you need a subarray or a shallow copy.

## When Not to Use

- When you need to remove or replace elements (use `splice()` instead).

---

## Advanced

- Works on array-like objects (e.g., arguments, NodeLists).
- Does not copy nested objects (shallow copy).

---

## References

- [MDN slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice)
