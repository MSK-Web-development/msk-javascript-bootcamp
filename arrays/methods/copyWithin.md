# Array.prototype.copyWithin()

## Overview

The `copyWithin()` method shallow copies part of an array to another location in the same array and returns it, without modifying its length. It mutates the original array and is useful for quickly copying values within an array.

---

## Syntax

```js
array.copyWithin(target, start[, end])
```

- **target**: Zero-based index at which to copy the sequence to.
- **start**: Zero-based index at which to start copying elements from.
- **end** (optional): Zero-based index at which to end copying (exclusive). Defaults to array.length.

---

## Parameters

| Parameter | Description                                      |
| --------- | ------------------------------------------------ |
| target    | Index to copy sequence to                        |
| start     | Index to start copying from                      |
| end       | Index to end copying (exclusive, default length) |

---

## Usage

```js
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3);
console.log(arr); // [4, 5, 3, 4, 5]
```

---

## Examples

### Copy to Start

```js
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(0, 3, 5);
// arr: [4, 5, 3, 4, 5]
```

### Copy to Middle

```js
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(2, 0, 2);
// arr: [1, 2, 1, 2, 5]
```

### Negative Indices

```js
const arr = [1, 2, 3, 4, 5];
arr.copyWithin(-2, 0, 2);
// arr: [1, 2, 3, 1, 2]
```

---

## Tips

- Mutates the original array.
- Does not change the array length.
- Overwrites existing values at the target location.
- Works with negative indices (counts from end).

---

## Do's and Don'ts

| Do                           | Don't                   |
| ---------------------------- | ----------------------- |
| Use for in-place copying     | Expect a new array      |
| Use with negative indices    | Use for deep copying    |
| Use for quick data shuffling | Use for resizing arrays |

---

## When to Use

- When you need to copy part of an array to another location in the same array.
- For quick in-place data manipulation.

## When Not to Use

- When you want a non-mutating operation.
- When you need to deep copy or clone arrays.

---

## Advanced

- Works on array-like objects.
- Can be used for efficient in-place data shuffling.
- Useful for implementing algorithms that require block moves.

---

## References

- [MDN copyWithin()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/copyWithin)

---

> **Summary:**
> Use `copyWithin()` for fast, in-place copying of array elements. It is ideal for shuffling or rearranging data within the same array.
