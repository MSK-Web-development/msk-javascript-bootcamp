/*
  In this code, we add a callback on the promise, then we return 
  the promise. The problem is that we return the initial promise. 
  Not the result of promise.then. The result of promise.then is a 
  lost promise because no one can interact with it.
*/
function test() {
    var promise = job();

    promise.then(function(data) {
        doSomething(data);
    });

    return promise;
}

// The Fix
function test() {
    var promise = job();

    return promise.then(function(data) {
        doSomething(data);
    });
}