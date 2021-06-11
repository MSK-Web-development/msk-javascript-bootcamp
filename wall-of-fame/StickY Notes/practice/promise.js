// PROMISES are used for asynchrous execution.

let certificatePromise = new Promise((resolve, reject) => {
  // some processing happens and candidate gets the certificate
  certified = true;
  if (certified) {
    setTimeout(() => {
      resolve("Certificate obtained"); // success
    }, 3000);
  } else {
    reject("Certificate rejected"); // fail
  }
});

certificatePromise
  .then((successResult) => {
    console.log(successResult);
  })
  .catch((failureResult) => {
    console.log(failureResult);
  });

console.log("asynchronous?");

let jobPromise = new Promise((resolve, reject) => {
  // some processing happens and candidate gets the certificate
  job = true;
  if (job) {
    resolve("Job obtained"); // success
  } else {
    reject("Job rejected"); // fail
  }
});

certificatePromise
  .then((successResult) => {
    console.log(successResult);
    return jobPromise;
  })
  .catch((failureResult) => {
    console.log(failureResult);
  })
  .then((successResult) => {
    // 'then' block of jobPromise
    console.log(successResult);
  })
  .catch((failureResult) => {
    console.log(failureResult);
  });

let obj = {
  name: "rambo",
  age: 22,
};

console.log(obj);
