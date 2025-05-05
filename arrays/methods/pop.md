# Array.prototype.pop()

## Overview

The `pop()` method removes the last element from an array and returns that element. This method changes the length of the array.

---

## Syntax

```js
array.pop();
```

- **Returns**: The removed element from the array; `undefined` if the array is empty.

---

## Usage

```js
const arr = [1, 2, 3];
const last = arr.pop();
console.log(arr); // [1, 2]
console.log(last); // 3
```

---

## Examples

### Remove the last element

```js
let fruits = ["apple", "banana", "orange"];
let removed = fruits.pop();
// fruits: ['apple', 'banana']
// removed: 'orange'
```

### Pop from an empty array

```js
let empty = [];
let result = empty.pop();
// result: undefined
```

---

## Tips

- `pop()` modifies the original array.
- Returns `undefined` if the array is empty.

---

## Do's and Don'ts

| Do                              | Don't                       |
| ------------------------------- | --------------------------- |
| Use for removing from the end   | Use for removing from start |
| Check for empty array if needed | Expect a new array returned |

---

## When to Use

- When you need to remove the last element from an array.

## When Not to Use

- When you need to remove the first element (use `shift()` instead).

---

## Advanced

- `pop()` can be used on array-like objects with a `length` property.

---

## References

- [MDN pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)
