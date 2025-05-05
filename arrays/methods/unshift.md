# Array.prototype.unshift()

## Overview

The `unshift()` method adds one or more elements to the beginning of an array and returns the new length of the array.

---

## Syntax

```js
array.unshift(element1, element2, ..., elementN)
```

- **element1, ..., elementN**: The elements to add to the beginning of the array.
- **Returns**: The new length of the array.

---

## Usage

```js
const arr = [3, 4];
const newLength = arr.unshift(1, 2);
console.log(arr); // [1, 2, 3, 4]
console.log(newLength); // 4
```

---

## Parameters

| Parameter | Description                    |
| --------- | ------------------------------ |
| elementN  | Element(s) to add to the array |

---

## Examples

### Add a single element

```js
let fruits = ["banana", "orange"];
fruits.unshift("apple");
// fruits: ['apple', 'banana', 'orange']
```

### Add multiple elements

```js
let numbers = [3, 4, 5];
numbers.unshift(1, 2);
// numbers: [1, 2, 3, 4, 5]
```

---

## Tips

- `unshift()` modifies the original array.
- Returns the new length, not the array itself.

---

## Do's and Don'ts

| Do                                   | Don't                       |
| ------------------------------------ | --------------------------- |
| Use for adding to the start of array | Use for adding to the end   |
| Use with multiple elements           | Expect a new array returned |

---

## When to Use

- When you need to add elements to the beginning of an array.

## When Not to Use

- When you need to add elements to the end (use `push()` instead).

---

## Advanced

- `unshift()` can be used on array-like objects with a `length` property.
- Not chainable (returns length, not array).

---

## References

- [MDN unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)
