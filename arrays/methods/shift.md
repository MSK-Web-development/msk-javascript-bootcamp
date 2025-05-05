# Array.prototype.shift()

## Overview

The `shift()` method removes the first element from an array and returns that removed element. This method changes the length of the array.

---

## Syntax

```js
array.shift();
```

- **Returns**: The removed element from the array; `undefined` if the array is empty.

---

## Usage

```js
const arr = [1, 2, 3];
const first = arr.shift();
console.log(arr); // [2, 3]
console.log(first); // 1
```

---

## Examples

### Remove the first element

```js
let fruits = ["apple", "banana", "orange"];
let removed = fruits.shift();
// fruits: ['banana', 'orange']
// removed: 'apple'
```

### Shift from an empty array

```js
let empty = [];
let result = empty.shift();
// result: undefined
```

---

## Tips

- `shift()` modifies the original array.
- Returns `undefined` if the array is empty.

---

## Do's and Don'ts

| Do                              | Don't                       |
| ------------------------------- | --------------------------- |
| Use for removing from the start | Use for removing from end   |
| Check for empty array if needed | Expect a new array returned |

---

## When to Use

- When you need to remove the first element from an array.

## When Not to Use

- When you need to remove the last element (use `pop()` instead).

---

## Advanced

- `shift()` can be used on array-like objects with a `length` property.

---

## References

- [MDN shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)
