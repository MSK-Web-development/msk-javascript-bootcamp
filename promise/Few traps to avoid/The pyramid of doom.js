/*
  this code is wrong because the result of your function is job().then 
  result. You broke the chain again. Use the promise chaining feature:
*/
function test() {
    return job().then(function() {
        return job2().then(function() {
            return job3().then(function() {
                return job4().then(function() {
                    doSomething();
                });
            });
        });
    });
}

// The fix
function test() {
    return job()

    .then(function() {
        return job2();
    })

    .then(function() {
        return job3();
    })

    .then(function() {
        return job4();
    })

    .then(function() {
        doSomething();
    });
}