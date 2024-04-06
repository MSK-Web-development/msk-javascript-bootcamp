# Promise.race method

`Promise.race` is a built-in method in JavaScript that takes an iterable (like an array) of Promises as input, and returns a single Promise. This returned Promise resolves or rejects as soon as one of the input Promises in the iterable resolves or rejects.

### Syntax

```javascript
Promise.race(iterable);
```

### Parameters

- `iterable`: An iterable object such as an Array or String, containing Promises.

### Return Value

A single Promise that resolves or rejects as soon as one of the input Promises in the iterable resolves or rejects.

### Examples

#### Example 1: Basic Usage

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 200, 'two');
});

Promise.race([promise1, promise2])
  .then(value => {
    console.log(value); // Output: one
  });
```

#### Example 2: Handling Rejection

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(reject, 100, 'Error!');
});

Promise.race([promise1, promise2])
  .then(value => {
    console.log(value); 
  })
  .catch(error => {
    console.error(error); // Output: Error!
  });
```

#### Example 3: Using with Fetch

```javascript
const timeoutPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    reject('Timeout!');
  }, 1000);
});

const fetchData = fetch('https://api.example.com/data');

Promise.race([fetchData, timeoutPromise])
  .then(response => {
    console.log(response);
  })
  .catch(error => {
    console.error(error); // Output: Timeout!
  });
```

#### Example 4: Mixed Promises

```javascript
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 500, 'one');
});

const promise2 = 42;

Promise.race([promise1, promise2])
  .then(value => {
    console.log(value); // Output: 42
  });
```

### Notes

- `Promise.race()` is useful when you want to race multiple asynchronous operations and respond as soon as the first one finishes.
- If the iterable passed to `Promise.race()` is empty, the returned Promise will never settle.
- `Promise.race()` can be used to implement timeouts for asynchronous operations.