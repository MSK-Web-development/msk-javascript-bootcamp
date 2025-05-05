# Array.prototype.reduce()

## Overview

The `reduce()` method executes a reducer function on each element of the array, resulting in a single output value. It is commonly used for summing values, accumulating results, or transforming arrays into other data structures.

---

## Syntax

```js
const result = array.reduce(
  callback(accumulator, currentValue, index, array),
  initialValue
);
```

- **callback**: Function to execute on each element, taking up to four arguments:
  - `accumulator`: The accumulated value returned by the last invocation.
  - `currentValue`: The current element being processed.
  - `index` (optional): The index of the current element.
  - `array` (optional): The array `reduce()` was called upon.
- **initialValue** (optional): Value to use as the first argument to the first call of the callback. If not supplied, the first element in the array is used and skipped as currentValue.

---

## Parameters

| Parameter    | Description                                  |
| ------------ | -------------------------------------------- |
| callback     | Function to execute on each element          |
| initialValue | Initial value for the accumulator (optional) |

---

## Usage

```js
const arr = [1, 2, 3, 4];
const sum = arr.reduce((acc, val) => acc + val, 0);
console.log(sum); // 10
```

---

## Examples

### Summing an Array

```js
const numbers = [10, 20, 30];
const total = numbers.reduce((sum, n) => sum + n, 0);
// total: 60
```

### Flattening an Array

```js
const nested = [[1, 2], [3, 4], [5]];
const flat = nested.reduce((acc, arr) => acc.concat(arr), []);
// flat: [1,2,3,4,5]
```

### Counting Occurrences

```js
const fruits = ["apple", "banana", "apple", "orange"];
const count = fruits.reduce((acc, fruit) => {
  acc[fruit] = (acc[fruit] || 0) + 1;
  return acc;
}, {});
// count: { apple: 2, banana: 1, orange: 1 }
```

### Without Initial Value

```js
const arr = [1, 2, 3];
const result = arr.reduce((acc, val) => acc + val);
// result: 6
```

---

## Tips

- If no initial value is provided, the first array element is used as the initial accumulator and skipped as currentValue.
- For empty arrays with no initial value, `reduce()` throws a TypeError.
- Can be used for any kind of accumulation, not just numbers.

---

## Do's and Don'ts

| Do                                   | Don't                                  |
| ------------------------------------ | -------------------------------------- |
| Use for accumulating values          | Use for side effects only              |
| Provide an initial value when safe   | Forget initial value with empty arrays |
| Return the accumulator from callback | Mutate the original array              |

---

## When to Use

- When you want to combine all elements into a single value (sum, product, object, etc.).
- When you want to transform an array into a different structure.

## When Not to Use

- When you want to return an array of the same length (use `map`).
- When you want to filter elements (use `filter`).

---

## Advanced

- Works on array-like objects.
- Can be used for complex data transformations (e.g., grouping, flattening).
- `reduceRight()` works similarly but processes the array from right to left.

---

## References

- [MDN reduce()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce)

---

> **Summary:**
> Use `reduce()` to accumulate array values into a single result. It is powerful for data processing and transformation in JavaScript.
