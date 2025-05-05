# Array.prototype.keys()

## Overview

The `keys()` method returns a new Array Iterator object that contains the keys (indices) for each index in the array. It is useful for iterating over the indices of an array, especially with `for...of` loops.

---

## Syntax

```js
const iterator = array.keys();
```

- No parameters.

---

## Usage

```js
const arr = ["a", "b", "c"];
for (const key of arr.keys()) {
  console.log(key);
}
// 0
// 1
// 2
```

---

## Examples

### Manual Iteration

```js
const arr = ["x", "y"];
const iterator = arr.keys();
console.log(iterator.next().value); // 0
console.log(iterator.next().value); // 1
```

### Using with Array.from

```js
const arr = ["foo", "bar"];
const keys = Array.from(arr.keys());
// keys: [0, 1]
```

---

## Tips

- Returns an iterator, not an array.
- Useful for `for...of` loops when you need indices.
- Works on array-like objects.

---

## Do's and Don'ts

| Do                              | Don't                      |
| ------------------------------- | -------------------------- |
| Use for index iteration         | Expect an array as result  |
| Use with `for...of` or `next()` | Use for value iteration    |
| Use for sparse arrays           | Use for mutating the array |

---

## When to Use

- When you need to iterate over indices of an array.
- When working with `for...of` loops or iterators.

## When Not to Use

- When you only need values (use `values()` or direct iteration).
- When you need both index and value (use `entries()`).

---

## Advanced

- The iterator is live: changes to the array after creating the iterator are reflected.
- Can be used with destructuring for concise code.
- Useful for functional programming and generators.

---

## References

- [MDN keys()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/keys)

---

> **Summary:**
> Use `keys()` to iterate over the indices of an array. It is ideal for advanced iteration patterns and index-based logic.
