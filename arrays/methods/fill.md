# Array.prototype.fill()

## Overview

The `fill()` method changes all elements in an array to a static value, from a start index (default 0) to an end index (default array.length). It mutates the original array and returns a reference to it.

---

## Syntax

```js
array.fill(value[, start[, end]])
```

- **value**: The value to fill the array with.
- **start** (optional): The index to start filling (inclusive). Defaults to 0.
- **end** (optional): The index to stop filling (exclusive). Defaults to array.length.

---

## Parameters

| Parameter | Description                                 |
| --------- | ------------------------------------------- |
| value     | Value to fill the array with                |
| start     | Start index (inclusive, default 0)          |
| end       | End index (exclusive, default array.length) |

---

## Usage

```js
const arr = [1, 2, 3, 4];
arr.fill(0);
console.log(arr); // [0, 0, 0, 0]
```

---

## Examples

### Fill Part of an Array

```js
const arr = [1, 2, 3, 4, 5];
arr.fill(9, 1, 3);
// arr: [1, 9, 9, 4, 5]
```

### Fill with Objects (Reference Pitfall)

```js
const arr = new Array(3).fill({});
arr[0].a = 1;
console.log(arr); // [{ a: 1 }, { a: 1 }, { a: 1 }] (all refer to the same object)
```

### Fill Empty Array

```js
const arr = new Array(4).fill(7);
// arr: [7, 7, 7, 7]
```

---

## Tips

- Mutates the original array.
- Fills from `start` (inclusive) to `end` (exclusive).
- If `start` >= array.length, nothing is changed.
- If `end` > array.length, it is set to array.length.
- If `start` is negative, it is treated as array.length + start.
- If `end` is negative, it is treated as array.length + end.

---

## Do's and Don'ts

| Do                              | Don't                             |
| ------------------------------- | --------------------------------- |
| Use for initializing arrays     | Use with objects unless intended  |
| Use for resetting values        | Expect a new array                |
| Use with numbers, strings, etc. | Use for sparse arrays (fills all) |

---

## When to Use

- When you need to initialize or reset all or part of an array.
- When you want to quickly fill an array with a static value.

## When Not to Use

- When you want a non-mutating operation.
- When you want to fill with unique objects (use a loop or `map`).

---

## Advanced

- Works on array-like objects.
- Can be used for quick array initialization.
- Useful for creating test data or clearing arrays.

---

## References

- [MDN fill()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/fill)

---

> **Summary:**
> Use `fill()` to quickly set all or part of an array to a static value. Remember, it mutates the original array and can have reference pitfalls with objects.
