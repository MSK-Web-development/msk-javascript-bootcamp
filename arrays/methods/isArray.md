# Array.isArray()

## Overview

`Array.isArray()` is a static method that determines whether the passed value is an array. It is the recommended way to check for arrays in JavaScript, as it works reliably across frames and contexts.

---

## Syntax

```js
Array.isArray(value);
```

- **value**: The value to be checked.

---

## Parameters

| Parameter | Description                       |
| --------- | --------------------------------- |
| value     | The value to check for array-ness |

---

## Usage

```js
console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("foo")); // false
console.log(Array.isArray({})); // false
```

---

## Examples

### Checking Array-Like Objects

```js
console.log(Array.isArray({ length: 0 })); // false
```

### Cross-Frame Arrays

```js
// In a browser, arrays from different iframes are still detected:
// let arr = window.frames[0].Array();
// Array.isArray(arr); // true
```

### Polyfill Example

```js
if (!Array.isArray) {
  Array.isArray = function (arg) {
    return Object.prototype.toString.call(arg) === "[object Array]";
  };
}
```

---

## Tips

- Works across different execution contexts (e.g., iframes).
- More reliable than `instanceof Array`.
- Returns `false` for array-like objects that are not true arrays.

---

## Do's and Don'ts

| Do                                  | Don't                               |
| ----------------------------------- | ----------------------------------- |
| Use for robust array checks         | Use `typeof` for arrays             |
| Use for cross-frame array detection | Use `instanceof Array` in all cases |
| Use for validating input types      | Use for array-like objects          |

---

## When to Use

- When you need to check if a value is an array.
- When working with data from different frames or contexts.

## When Not to Use

- When you want to check for array-like objects (check for `length` property instead).

---

## Advanced

- Works on all JavaScript objects, including those from other windows/frames.
- Useful for input validation and type checking.

---

## References

- [MDN Array.isArray()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/isArray)

---

> **Summary:**
> Use `Array.isArray()` for reliable, cross-context array detection. It is the standard way to check for arrays in JavaScript.
