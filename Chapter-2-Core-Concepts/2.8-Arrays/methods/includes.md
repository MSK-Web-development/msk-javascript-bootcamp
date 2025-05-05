# Array.prototype.includes()

## Overview

The `includes()` method determines whether an array contains a certain value among its entries, returning `true` or `false` as appropriate. It is a simple and readable way to check for the existence of an element.

---

## Syntax

```js
const result = array.includes(searchElement[, fromIndex])
```

- **searchElement**: The value to search for.
- **fromIndex** (optional): The position in the array at which to begin searching. Defaults to `0`. If negative, it is taken as the offset from the end of the array.

---

## Parameters

| Parameter     | Description                               |
| ------------- | ----------------------------------------- |
| searchElement | The value to search for                   |
| fromIndex     | Index to start search from (default is 0) |

---

## Usage

```js
const arr = [1, 2, 3];
console.log(arr.includes(2)); // true
console.log(arr.includes(4)); // false
```

---

## Examples

### Using fromIndex

```js
const arr = [1, 2, 3, 2];
console.log(arr.includes(2, 2)); // true (starts at index 2)
console.log(arr.includes(2, 3)); // false (starts at index 3)
```

### Negative fromIndex

```js
const arr = [1, 2, 3, 4];
console.log(arr.includes(3, -2)); // true (starts at index 2)
```

### Checking for NaN

```js
const arr = [NaN, 1, 2];
console.log(arr.includes(NaN)); // true
```

---

## Tips

- `includes()` uses the [SameValueZero](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness) comparison (like `===`, but treats `NaN` as equal to `NaN`).
- Does not skip empty slots in sparse arrays.
- More readable than `indexOf` for existence checks.

---

## Do's and Don'ts

| Do                                  | Don't                                 |
| ----------------------------------- | ------------------------------------- |
| Use for existence checks            | Use for getting index (use `indexOf`) |
| Use with `NaN` and special values   | Expect to find objects by reference   |
| Use negative `fromIndex` for offset | Use for deep equality                 |

---

## When to Use

- When you need to check if an array contains a value.
- When you want a readable alternative to `indexOf` for existence.

## When Not to Use

- When you need the index of the value (use `indexOf`).
- When you need deep equality checks for objects.

---

## Advanced

- Works on array-like objects.
- Can be used for quick membership tests in arrays.
- Returns `false` for empty arrays.

---

## References

- [MDN includes()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/includes)

---

> **Summary:**
> Use `includes()` for simple, readable existence checks in arrays. It is especially useful for primitives and special values like `NaN`.
