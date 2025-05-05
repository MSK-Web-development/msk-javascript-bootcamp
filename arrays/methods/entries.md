# Array.prototype.entries()

## Overview

The `entries()` method returns a new Array Iterator object that contains key/value pairs for each index in the array. It is useful for iterating over both the index and value of each array element.

---

## Syntax

```js
const iterator = array.entries();
```

- No parameters.

---

## Usage

```js
const arr = ["a", "b", "c"];
for (const [index, value] of arr.entries()) {
  console.log(index, value);
}
// 0 'a'
// 1 'b'
// 2 'c'
```

---

## Examples

### Manual Iteration

```js
const arr = ["x", "y"];
const iterator = arr.entries();
console.log(iterator.next().value); // [0, 'x']
console.log(iterator.next().value); // [1, 'y']
```

### Using with Array.from

```js
const arr = ["foo", "bar"];
const pairs = Array.from(arr.entries());
// pairs: [[0, 'foo'], [1, 'bar']]
```

---

## Tips

- Returns an iterator, not an array.
- Useful for `for...of` loops when you need both index and value.
- Works on array-like objects.

---

## Do's and Don'ts

| Do                              | Don't                        |
| ------------------------------- | ---------------------------- |
| Use for index-value iteration   | Expect an array as result    |
| Use with destructuring in loops | Use for value-only iteration |
| Use with `for...of` or `next()` | Use for mutating the array   |

---

## When to Use

- When you need both index and value during iteration.
- When working with `for...of` loops or iterators.

## When Not to Use

- When you only need values (use `values()` or direct iteration).
- When you only need indices (use `keys()`).

---

## Advanced

- The iterator is live: changes to the array after creating the iterator are reflected.
- Can be used with destructuring for concise code.
- Useful for functional programming and generators.

---

## References

- [MDN entries()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/entries)

---

> **Summary:**
> Use `entries()` to iterate over both index and value pairs in an array. It is ideal for advanced iteration patterns and destructuring.
