# Array.prototype.flat()

## Overview

The `flat()` method creates a new array with all sub-array elements concatenated into it recursively up to the specified depth. It is useful for flattening nested arrays.

---

## Syntax

```js
const newArray = array.flat([depth]);
```

- **depth** (optional): The depth level specifying how deep a nested array structure should be flattened. Defaults to `1`.

---

## Parameters

| Parameter | Description                     |
| --------- | ------------------------------- |
| depth     | Depth to flatten (default is 1) |

---

## Usage

```js
const arr = [1, 2, [3, 4]];
const flatArr = arr.flat();
console.log(flatArr); // [1, 2, 3, 4]
```

---

## Examples

### Flatten One Level

```js
const arr = [1, 2, [3, 4, [5, 6]]];
const flat1 = arr.flat();
// flat1: [1, 2, 3, 4, [5, 6]]
```

### Flatten Two Levels

```js
const arr = [1, 2, [3, 4, [5, 6]]];
const flat2 = arr.flat(2);
// flat2: [1, 2, 3, 4, 5, 6]
```

### Flatten All Levels

```js
const arr = [1, [2, [3, [4]]]];
const completelyFlat = arr.flat(Infinity);
// completelyFlat: [1, 2, 3, 4]
```

### With Empty Slots

```js
const arr = [1, , 2, [3, , 4]];
const flatArr = arr.flat();
// flatArr: [1, 2, 3, 4]
```

---

## Tips

- Does not mutate the original array.
- Empty slots are removed in the new array.
- Use `Infinity` as depth to completely flatten any array.

---

## Do's and Don'ts

| Do                                | Don't                             |
| --------------------------------- | --------------------------------- |
| Use to flatten nested arrays      | Use for non-nested arrays         |
| Specify depth as needed           | Expect deep flattening by default |
| Use with `map` for flatMap effect | Use for mapping (use `flatMap`)   |

---

## When to Use

- When you need to reduce the nesting of arrays.
- When you want to remove empty slots from arrays.

## When Not to Use

- When you want to transform elements (use `map`).
- When you want to flatten and map in one step (use `flatMap`).

---

## Advanced

- Works on array-like objects.
- Can be combined with `map` for custom flattening.
- Removes empty slots (holes) in arrays.

---

## References

- [MDN flat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/flat)

---

> **Summary:**
> Use `flat()` to create a new array with reduced nesting. It is ideal for flattening arrays to a specified depth.
