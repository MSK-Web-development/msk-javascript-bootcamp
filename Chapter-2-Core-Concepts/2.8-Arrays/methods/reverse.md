# Array.prototype.reverse()

## Overview

The `reverse()` method reverses the elements of an array in place. The first array element becomes the last, and the last becomes the first. This method mutates the original array and returns a reference to it.

---

## Syntax

```js
array.reverse();
```

- No parameters.

---

## Usage

```js
const arr = [1, 2, 3];
arr.reverse();
console.log(arr); // [3, 2, 1]
```

---

## Examples

### Reversing Strings in an Array

```js
const words = ["one", "two", "three"];
words.reverse();
// words: ["three", "two", "one"]
```

### Reversing Twice

```js
const arr = [1, 2, 3];
arr.reverse(); // [3, 2, 1]
arr.reverse(); // [1, 2, 3]
```

### Chaining with Other Methods

```js
const arr = [1, 2, 3, 4];
const reversed = arr.reverse().join("-");
// reversed: "4-3-2-1"
```

---

## Tips

- Mutates the original array.
- Returns the same array (not a copy).
- Works on array-like objects with a `length` property.

---

## Do's and Don'ts

| Do                                | Don't                                    |
| --------------------------------- | ---------------------------------------- |
| Use when you want to mutate array | Expect a new array                       |
| Use for in-place reversal         | Use on frozen arrays                     |
| Chain with other mutating methods | Use on array-like objects without length |

---

## When to Use

- When you need to reverse the order of elements in an array.
- When you want to mutate the original array.

## When Not to Use

- When you need to preserve the original array (make a copy first).
- When you want a non-mutating operation.

---

## Advanced

- Works on array-like objects.
- Can be used for custom sorting in descending order (with `sort`).
- Useful for undo/redo stacks and palindromes.

---

## References

- [MDN reverse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reverse)

---

> **Summary:**
> Use `reverse()` to reverse the order of elements in an array in place. Remember, it mutates the original array.
