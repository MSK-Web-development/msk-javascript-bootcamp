# Promise.all method

`Promise.all` is a built-in method in JavaScript that takes an iterable (like an array) of Promises as input, and returns a single Promise. This returned Promise resolves when all of the input Promises in the iterable have resolved, or rejects if any of the input Promises reject.

### Syntax

```javascript
Promise.all(iterable);
```

### Parameters

- `iterable`: An iterable object such as an Array or String, containing Promises.

### Return Value

A single Promise that resolves when all of the input Promises in the iterable have resolved, or rejects if any of the input Promises reject. The resolved value is an array containing the resolved values of the input Promises in the same order as the input iterable.

### Examples

#### Example 1: Basic Usage

```javascript
const promise1 = Promise.resolve(1);
const promise2 = Promise.resolve(2);
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // Output: [1, 2, 3]
  })
  .catch((error) => {
    console.error(error);
  });
```

#### Example 2: Handling Rejection

```javascript
const promise1 = Promise.resolve(1);
const promise2 = Promise.reject("Error!");
const promise3 = Promise.resolve(3);

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values);
  })
  .catch((error) => {
    console.error(error); // Output: Error!
  });
```

#### Example 3: Using with `map`

```javascript
const urls = ["url1", "url2", "url3"];

const promises = urls.map((url) => fetch(url)); // Returns array of Promises

Promise.all(promises)
  .then((responses) => {
    return Promise.all(responses.map((response) => response.json()));
  })
  .then((data) => {
    console.log(data);
  })
  .catch((error) => {
    console.error(error);
  });
```

#### Example 4: Mixed Promises

```javascript
const promise1 = Promise.resolve(1);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3]).then((values) => {
  console.log(values); // Output: [1, 42, "foo"]
});
```

#### Example 5: Empty Array

```javascript
Promise.all([]).then((values) => {
  console.log(values); // Output: []
});
```

### Notes

- If any of the input Promises reject, the Promise returned by `Promise.all()` will immediately reject with the reason of the first Promise that was rejected.
- If the iterable passed to `Promise.all()` contains non-Promise values, they will be treated as resolved Promises.
- `Promise.all()` is useful when you need to wait for multiple asynchronous operations to complete before proceeding.
