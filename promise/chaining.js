/*
Now we have to deal with the difficult part of promises: chaining. 
Chaining promises is the very reason we have promises in the first 
place. It's a proper way to tell JavaScript the next thing to do 
after an asynchronous task is done, thus avoiding the pyramid of 
doom we saw in the previous lessons.

Did you ask yourself, "What is the result of the then method?" 
Here is the answer: It's a promise. But what promise is it? It 
can be the promise you want. It's easier to explain with an example 
so take a look at the following code and run it.
*/

var promise = job1();

promise

.then(function(data1) {
    console.log('data1', data1);
    return job2();
})

.then(function(data2) {
    console.log('data2', data2);
    return 'Hello world';
})

.then(function(data3) {
    console.log('data3', data3);
});

function job1() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('result of job 1');
        }, 1000);
    });
}

function job2() {
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve('result of job 2');
        }, 1000);
    });
}

/*
*Output:

data1 result of job 1
data2 result of job 2
data3 Hello world
*/
