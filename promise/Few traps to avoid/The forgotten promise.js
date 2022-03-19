/*
    You call a method that returns a promise but you create 
    your own promise instead of returning the original one.
*/
function test() {
    var promise = job();

    return new Promise(function(resolve, reject) {
        promise.then(function(data) {
            data = doSomething(data);
            resolve(data);
        }, function(error) {
            reject(error);
        });
    });
}

// The Fix
function test() {
    var promise = job();

    return promise.then(function(data) {
            return doSomething(data);
        })
}