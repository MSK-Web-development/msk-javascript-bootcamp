# Array.prototype.join()

## Overview

The `join()` method creates and returns a new string by concatenating all elements in an array, separated by a specified separator string. If the array has only one item, that item is returned as a string without the separator.

---

## Syntax

```js
const str = array.join([separator]);
```

- **separator** (optional): A string to separate each pair of adjacent elements. Defaults to a comma (",").

---

## Parameters

| Parameter | Description                                     |
| --------- | ----------------------------------------------- |
| separator | String to separate array elements (default ",") |

---

## Usage

```js
const arr = ["Wind", "Water", "Fire"];
console.log(arr.join()); // "Wind,Water,Fire"
console.log(arr.join(" - ")); // "Wind - Water - Fire"
```

---

## Examples

### Joining with Different Separators

```js
const arr = [1, 2, 3];
console.log(arr.join("|")); // "1|2|3"
console.log(arr.join("")); // "123"
```

### Joining Empty and Sparse Arrays

```js
const arr = [1, , 3];
console.log(arr.join("-")); // "1--3"

const empty = [];
console.log(empty.join()); // ""
```

### Joining Array-Like Objects

```js
console.log(
  Array.prototype.join.call({ length: 3, 0: "a", 1: "b", 2: "c" }, "+")
); // "a+b+c"
```

---

## Tips

- Empty slots in sparse arrays are treated as empty strings.
- If an element is `undefined` or `null`, it is converted to an empty string.
- Does not mutate the original array.

---

## Do's and Don'ts

| Do                                  | Don't                                 |
| ----------------------------------- | ------------------------------------- |
| Use to create CSV or delimited text | Expect to mutate the array            |
| Use with custom separators          | Use for joining objects (toString)    |
| Use for readable output             | Use for deep joining of nested arrays |

---

## When to Use

- When you need a string representation of array elements.
- When creating CSV, TSV, or other delimited formats.

## When Not to Use

- When you need to join nested arrays (use `flat` first).
- When you want to mutate the array.

---

## Advanced

- Works on array-like objects.
- Can be used for quick string formatting.
- Useful for generating readable output from arrays.

---

## References

- [MDN join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

---

> **Summary:**
> Use `join()` to concatenate array elements into a string with a custom separator. It is ideal for formatting and output.
