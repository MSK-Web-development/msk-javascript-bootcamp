/*
  As a rule of thumb: When a function can return a promise, 
  ALWAYS return a promise. Otherwise you'll have this ugly code 
  everywhere:
*/
function job() {
    if (test) {
        return aNewPromise();
    } else {
        return 42;
    }
}

var result = job();

if (typeof job === 'object' && typeof job.then === 'function') {
    // ...
} else {
    // ...
}

// The Fix - Auto resolved / rejected promise
function job() {
    if (test) {
        return aNewPromise();
    } else {
        return Promise.resolve(42); // return an anto-resolved promise with `42` in data.
    }
}