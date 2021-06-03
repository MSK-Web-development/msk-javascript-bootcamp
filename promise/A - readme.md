### Definition
A Promise is an object representing the eventual completion or failure of an asynchronous operation.

---
### Guarantees
Unlike "old-style", passed-in callbacks, a promise comes with some guarantees:

1. Callbacks will never be called before the completion of the current run of the JavaScript event loop.
2. Callbacks added with then() even after the success or failure of the asynchronous operation, will be called.
3. Multiple callbacks may be added by calling then() several times. Each callback is executed one after another, in the order in which they were inserted.

#### Note
> One of the great things about using promises is chaining.

---
### Chaining
The then() function returns a new promise, different from the original:

>Example:
const promise = doSomething();
const promise2 = promise.then(successCallback, failureCallback);

promise2 represents the completion not just of doSomething(), but also of the successCallback or failureCallback you passed in.

> const promise3 = promise2.then(successCallback2, failureCallback2)

#### Note
> successCallback2 and failureCallback2 get queued behind promise returned by successCallback or failureCallback

---

### callback pyramid of doom
> Promises solve a fundamental flaw with the callback pyramid of doom, by catching all errors, even thrown exceptions and programming errors. This is essential for functional composition of asynchronous operations.

Learn more in :
callback-pyramid-of-doom.js
chaining-even-after-failure.js 