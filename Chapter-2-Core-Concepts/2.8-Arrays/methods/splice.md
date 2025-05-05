# Array.prototype.splice()

## Overview

The `splice()` method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place. It returns an array containing the deleted elements.

---

## Syntax

```js
array.splice(start[, deleteCount[, item1[, item2[, ...]]]])
```

- **start**: The index at which to start changing the array.
- **deleteCount** (optional): The number of elements to remove. If omitted, removes all from `start` to end.
- **item1, item2, ...** (optional): Elements to add to the array, starting at `start`.
- **Returns**: An array containing the deleted elements.

---

## Usage

```js
const arr = [1, 2, 3, 4, 5];
const removed = arr.splice(2, 2, "a", "b");
console.log(arr); // [1, 2, 'a', 'b', 5]
console.log(removed); // [3, 4]
```

---

## Parameters

| Parameter   | Description                        |
| ----------- | ---------------------------------- |
| start       | Index to start changing the array  |
| deleteCount | Number of elements to remove       |
| itemN       | Elements to add at the start index |

---

## Examples

### Remove elements

```js
let arr = [1, 2, 3, 4, 5];
arr.splice(1, 2);
// arr: [1, 4, 5]
```

### Add elements

```js
let arr = [1, 4, 5];
arr.splice(1, 0, 2, 3);
// arr: [1, 2, 3, 4, 5]
```

### Replace elements

```js
let arr = [1, 2, 3];
arr.splice(1, 1, "a", "b");
// arr: [1, 'a', 'b', 3]
```

---

## Tips

- Modifies the original array.
- Returns an array of removed elements (can be empty).
- Can both remove and add elements at once.

---

## Do's and Don'ts

| Do                                | Don't                       |
| --------------------------------- | --------------------------- |
| Use for in-place modification     | Use for copying             |
| Use for adding/removing/replacing | Expect a new array returned |

---

## When to Use

- When you need to add, remove, or replace elements in place.

## When Not to Use

- When you need a non-mutating method (use `slice()` for copying).

---

## Advanced

- Works on array-like objects.
- Negative `start` counts from the end.

---

## References

- [MDN splice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice)
