# Array.prototype.push()

## Overview

The `push()` method adds one or more elements to the end of an array and returns the new length of the array.

---

## Syntax

```js
array.push(element1, element2, ..., elementN)
```

- **element1, ..., elementN**: The elements to add to the end of the array.
- **Returns**: The new length of the array.

---

## Usage

```js
const arr = [1, 2, 3];
const newLength = arr.push(4, 5);
console.log(arr); // [1, 2, 3, 4, 5]
console.log(newLength); // 5
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
let fruits = ["apple", "banana"];
fruits.push("orange");
// fruits: ['apple', 'banana', 'orange']
```

### Add multiple elements

```js
let numbers = [1, 2];
numbers.push(3, 4, 5);
// numbers: [1, 2, 3, 4, 5]
```

### Using push with spread operator

```js
let arr1 = [1, 2];
let arr2 = [3, 4];
arr1.push(...arr2);
// arr1: [1, 2, 3, 4]
```

---

## Tips

- `push()` modifies the original array.
- Returns the new length, not the array itself.
- Can be used with the spread operator to add elements from another array.

---

## Do's and Don'ts

| Do                                    | Don't                       |
| ------------------------------------- | --------------------------- |
| Use for adding to the end of an array | Use for adding to the start |
| Use with multiple elements            | Expect a new array returned |

---

## When to Use

- When you need to add elements to the end of an array.

## When Not to Use

- When you need to add elements to the beginning (use `unshift()` instead).

---

## Advanced

- `push()` can be used on array-like objects with a `length` property.
- Not chainable (returns length, not array).

---

## References

- [MDN push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)
