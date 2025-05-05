# Array.prototype.every()

## Overview

The `every()` method tests whether all elements in the array pass the test implemented by the provided function. It returns `true` if the callback returns a truthy value for every element; otherwise, it returns `false`. Iteration stops as soon as the callback returns a falsy value.

---

## Syntax

```js
const result = array.every(callback(element, index, array), thisArg);
```

- **callback**: Function to test each element, taking up to three arguments:
  - `element`: The current element being processed.
  - `index` (optional): The index of the current element.
  - `array` (optional): The array `every()` was called upon.
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
const arr = [2, 4, 6];
const allEven = arr.every((x) => x % 2 === 0);
console.log(allEven); // true
```

---

## Examples

### All Elements Satisfy Condition

```js
const numbers = [10, 20, 30];
const allAbove5 = numbers.every((n) => n > 5);
// allAbove5: true
```

### At Least One Fails

```js
const arr = [1, 2, 3];
const allPositive = arr.every((x) => x > 1);
// allPositive: false
```

### Using Index and Array

```js
const arr = [1, 2, 3];
const result = arr.every((el, idx, array) => el === array[idx]);
// result: true
```

### Using `thisArg`

```js
const context = { min: 10 };
const arr = [12, 15, 20];
const allAboveMin = arr.every(function (x) {
  return x > this.min;
}, context);
// allAboveMin: true
```

---

## Tips

- Returns `true` for empty arrays (vacuous truth).
- Stops iterating as soon as callback returns `false`.
- Skips empty slots in sparse arrays.

---

## Do's and Don'ts

| Do                             | Don't                          |
| ------------------------------ | ------------------------------ |
| Use to check all elements      | Use for side effects           |
| Return a boolean from callback | Forget to return from callback |
| Use for validation             | Expect a new array             |

---

## When to Use

- When you need to verify that all elements meet a condition.
- For input validation or data checks.

## When Not to Use

- When you want to check if at least one element passes (use `some`).
- When you want to transform or filter the array.

---

## Advanced

- Works on array-like objects.
- Callback is only called for elements with assigned values (skips holes).
- Iteration order is left-to-right.

---

## References

- [MDN every()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/every)

---

> **Summary:**
> Use `every()` to check if all elements in an array satisfy a condition. It is ideal for validation and data integrity checks.
