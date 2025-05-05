# Array.prototype.values()

## Overview

The `values()` method returns a new Array Iterator object that contains the values for each index in the array. It is useful for iterating over the values of an array, especially with `for...of` loops.

---

## Syntax

```js
const iterator = array.values();
```

- No parameters.

---

## Usage

```js
const arr = ["a", "b", "c"];
for (const value of arr.values()) {
  console.log(value);
}
// 'a'
// 'b'
// 'c'
```

---

## Examples

### Manual Iteration

```js
const arr = ["x", "y"];
const iterator = arr.values();
console.log(iterator.next().value); // 'x'
console.log(iterator.next().value); // 'y'
```

### Using with Array.from

```js
const arr = ["foo", "bar"];
const values = Array.from(arr.values());
// values: ['foo', 'bar']
```

---

## Tips

- Returns an iterator, not an array.
- Useful for `for...of` loops when you need values.
- Works on array-like objects.

---

## Do's and Don'ts

| Do                              | Don't                      |
| ------------------------------- | -------------------------- |
| Use for value iteration         | Expect an array as result  |
| Use with `for...of` or `next()` | Use for index iteration    |
| Use for sparse arrays           | Use for mutating the array |

---

## When to Use

- When you need to iterate over values of an array.
- When working with `for...of` loops or iterators.

## When Not to Use

- When you only need indices (use `keys()`).
- When you need both index and value (use `entries()`).

---

## Advanced

- The iterator is live: changes to the array after creating the iterator are reflected.
- Can be used with destructuring for concise code.
- Useful for functional programming and generators.

---

## References

- [MDN values()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values)

---

> **Summary:**
> Use `values()` to iterate over the values of an array. It is ideal for advanced iteration patterns and value-based logic.
