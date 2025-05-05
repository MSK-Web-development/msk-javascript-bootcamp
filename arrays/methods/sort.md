# Array.prototype.sort()

## Overview

The `sort()` method sorts the elements of an array in place and returns the sorted array. By default, elements are sorted as strings in ascending order. You can provide a custom compare function for more advanced sorting.

---

## Syntax

```js
array.sort([compareFunction]);
```

- **compareFunction** (optional): Specifies a function that defines the sort order. If omitted, elements are converted to strings and sorted in ascending UTF-16 order.

---

## Parameters

| Parameter       | Description                              |
| --------------- | ---------------------------------------- |
| compareFunction | Function to define sort order (optional) |

---

## Usage

```js
const arr = [4, 2, 5, 1, 3];
arr.sort();
console.log(arr); // [1, 2, 3, 4, 5] (for numbers, may not work as expected without compareFunction)
```

---

## Examples

### Default Sort (as Strings)

```js
const arr = [10, 2, 30, 1];
arr.sort();
// arr: [1, 10, 2, 30] (sorted as strings)
```

### Numeric Sort

```js
const arr = [10, 2, 30, 1];
arr.sort((a, b) => a - b);
// arr: [1, 2, 10, 30]
```

### Descending Order

```js
const arr = [10, 2, 30, 1];
arr.sort((a, b) => b - a);
// arr: [30, 10, 2, 1]
```

### Sorting Strings (Case Insensitive)

```js
const arr = ["Banana", "apple", "Cherry"];
arr.sort((a, b) => a.localeCompare(b, undefined, { sensitivity: "base" }));
// arr: ["apple", "Banana", "Cherry"]
```

### Sorting Objects by Property

```js
const users = [
  { name: "Alice", age: 25 },
  { name: "Bob", age: 20 },
];
users.sort((a, b) => a.age - b.age);
// users: [{ name: 'Bob', age: 20 }, { name: 'Alice', age: 25 }]
```

---

## Tips

- Mutates the original array.
- The default sort converts elements to strings.
- Use a compare function for numeric or custom sorting.
- Not guaranteed to be stable in all JavaScript engines (ES2019+ requires stable sort).

---

## Do's and Don'ts

| Do                                | Don't                                  |
| --------------------------------- | -------------------------------------- |
| Use compare function for numbers  | Expect correct numeric sort by default |
| Use for in-place sorting          | Expect a new array                     |
| Chain with other mutating methods | Use on frozen arrays                   |

---

## When to Use

- When you need to sort elements in an array.
- When you want to sort objects by a property.

## When Not to Use

- When you need to preserve the original array (make a copy first).
- When you want a non-mutating operation.

---

## Advanced

- Works on array-like objects.
- Can be used for locale-aware sorting with `localeCompare`.
- Useful for custom sorting logic (e.g., by multiple properties).

---

## References

- [MDN sort()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)

---

> **Summary:**
> Use `sort()` to order array elements in place. Always use a compare function for numbers or custom sorting needs.
