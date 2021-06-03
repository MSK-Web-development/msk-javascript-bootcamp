// This is the classic callback pyramid of doom of an async operation

doSomething((result) => { // asynchronous function
  successCallback(result, (newResult) => {
    successCallback2(newResult, (finalResult) => {
      console.log(finalResult);
    }, failureCallback);
  }, failureCallback);
}, failureCallback);


const successCallback = (result, callback) => {
  const newResult = result + 1;
  callback(newResult);
}

const successCallback2 = (newResult, callback) => {
  const finalResult = newResult + 1;
  callback(finalResult);
}


// Solution with promises

doSomething()
  .then((result) => successCallback(result))
  .then((newResult) => successCallback2(newResult))
  .then((finalResult) => console.log(finalResult))
  .catch(failureCallback)


const successCallback = (result) => {
  // Returns promise1
}

const successCallback2 = (newResult) => {
  // Returns promise2
}

// Note : catch(failureCallback) is short for then(null, failureCallback). 
