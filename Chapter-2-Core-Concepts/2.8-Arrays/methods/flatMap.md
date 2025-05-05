# Array.prototype.flatMap()

## Overview

The `flatMap()` method first maps each element using a mapping function, then flattens the result into a new array. It is a combination of `map()` followed by `flat(1)`, and is useful for cases where you want to map and flatten in a single step.

---

## Syntax

```js
const newArray = array.flatMap(callback(currentValue, index, array), thisArg);
```

- **callback**: Function that produces an element or array for the new array, taking up to three arguments:
  - `currentValue`: The current element being processed.
  - `index` (optional): The index of the current element.
  - `array` (optional): The array `flatMap()` was called upon.
- **thisArg** (optional): Value to use as `this` when executing `callback`.

---

## Parameters

| Parameter | Description                                   |
| --------- | --------------------------------------------- |
| callback  | Function to execute on each element           |
| thisArg   | Value to use as `this` in callback (optional) |

---

## Usage

```js
const arr = [1, 2, 3];
const result = arr.flatMap((x) => [x, x * 2]);
console.log(result); // [1, 2, 2, 4, 3, 6]
```

---

## Examples

### Splitting and Flattening

```js
const words = ["hello world", "foo bar"];
const split = words.flatMap((str) => str.split(" "));
// split: ["hello", "world", "foo", "bar"]
```

### Removing Elements by Returning []

```js
const arr = [1, 2, 3, 4];
const evens = arr.flatMap((x) => (x % 2 === 0 ? [x] : []));
// evens: [2, 4]
```

### Using `thisArg`

```js
const context = { factor: 10 };
const arr = [1, 2];
const result = arr.flatMap(function (x) {
  return [x, x * this.factor];
}, context);
// result: [1, 10, 2, 20]
```

---

## Tips

- Equivalent to `array.map(...).flat(1)` but more efficient.
- Only flattens one level deep.
- Does not mutate the original array.
- Skips empty slots in sparse arrays.

---

## Do's and Don'ts

| Do                             | Don't                              |
| ------------------------------ | ---------------------------------- |
| Use for mapping and flattening | Use for deep flattening            |
| Return arrays from callback    | Expect more than one level flatten |
| Use for removing elements      | Use for mapping only (use `map`)   |

---

## When to Use

- When you want to map and flatten in a single step.
- When you want to remove or expand elements during mapping.

## When Not to Use

- When you need to flatten more than one level (use `flat`).
- When you only want to map (use `map`).

---

## Advanced

- Works on array-like objects.
- Callback is only called for elements with assigned values (skips holes).
- Can be used for filtering by returning empty arrays.

---

## References

- [MDN flatMap()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flatMap)

---

> **Summary:**
> Use `flatMap()` to efficiently map and flatten arrays in one step. It is ideal for transformations that expand or remove elements.
