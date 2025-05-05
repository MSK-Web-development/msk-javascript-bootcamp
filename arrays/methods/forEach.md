# Array.prototype.forEach()

## Overview

The `forEach()` method executes a provided function once for each array element. It is used for iterating over arrays and performing side effects, such as logging or updating external variables. Unlike some other array methods, `forEach()` always returns `undefined` and cannot be chained.

---

## Syntax

```js
array.forEach(callback(currentValue, index, array), thisArg);
```

- **callback**: Function to execute for each element, taking up to three arguments:
  - `currentValue`: The current element being processed.
  - `index` (optional): The index of the current element.
  - `array` (optional): The array `forEach()` was called upon.
- **thisArg** (optional): Value to use as `this` when executing `callback`.

---

## Parameters

| Parameter | Description                                   |
| --------- | --------------------------------------------- |
| callback  | Function to execute on each element           |
| thisArg   | Value to use as `this` in callback (optional) |

---

## Usage

```js
const arr = [1, 2, 3];
arr.forEach(function (element, index, array) {
  console.log(element, index, array);
});
// Output:
// 1 0 [1,2,3]
// 2 1 [1,2,3]
// 3 2 [1,2,3]
```

---

## Examples

### Logging Each Element

```js
["a", "b", "c"].forEach((el) => console.log(el));
// Output: a b c
```

### Modifying External Variables

```js
let sum = 0;
[1, 2, 3].forEach((num) => (sum += num));
console.log(sum); // 6
```

### Using `thisArg`

```js
function Counter() {
  this.count = 0;
}
Counter.prototype.add = function (arr) {
  arr.forEach(function () {
    this.count++;
  }, this);
};
const c = new Counter();
c.add([1, 2, 3]);
console.log(c.count); // 3
```

---

## Tips

- `forEach()` does not mutate the array itself, but the callback can.
- Iteration is not stoppable (no `break` or `return` to exit early).
- Works on array-like objects with a `length` property.
- Skips empty slots in sparse arrays.

---

## Do's and Don'ts

| Do                                  | Don't                             |
| ----------------------------------- | --------------------------------- |
| Use for side effects (logging, etc) | Use for creating new arrays       |
| Use with external state             | Expect a return value or chaining |
| Use with array-like objects         | Use to break/return early         |

---

## When to Use

- When you need to perform an action for each element (e.g., logging, updating UI, accumulating values in an external variable).

## When Not to Use

- When you need a new array (use `map`, `filter`, etc.).
- When you need to break or return early (use a `for` loop or `some`).

---

## Advanced

- Works on array-like objects (e.g., `arguments`, NodeLists).
- Callback is invoked only for elements with assigned values (skips holes).
- Not chainable (returns `undefined`).

---

## References

- [MDN forEach()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)

---

> **Summary:**
> Use `forEach()` for side effects and actions on each array element. For transformations, prefer `map`, `filter`, or `reduce`.
