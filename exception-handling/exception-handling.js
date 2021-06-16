// Basic Snippet for Try & Catch
/*
try {
  // ... the Code which you are unsure or might throw error
  let test = "String";
  console.log(test.toUpperCase());
  console.log(tes.toUpperCase()); // variable is not defined
} catch (err) {
  // catching the error thrown in the subsequent try block
  // error occurred in the catch block will not be handled by catch block
  console.log("\n\nI am From Error");
  console.log("Error Object:", err); // Error Object
  console.log("Error Name:", err.name); // Error Name : Name of the error
  console.log("Error Message:", err.message); // Error Message : Message of the error
  console.log("Error Stack:", err.stack); // Error Stack : Stack Trace of where the error occurred in the code file.
}
// Real-Life Example : Database Connection
*/

// Throwing User Defined Error
/*
try {
  let age = 10;
  if (age >= 18) {
    console.log("You are eligible for voting");
  } else {
    console.log("You are not eligible");
    throw "You are not eligible"; // throw will throw an general Error without Error Object
    // If we want to send as an object we can send it too. But Error Stack won't be there ;p We Don't know when & where it will happen.
    // throw { name: "Developer", message: "You are not eligible" };
  }
} catch (err) {
  console.log("\n\nI am From Error");
  console.log("Error Object:", err);
  console.log("Error Name:", err.name);
  console.log("Error Message:", err.message);
  console.log("Error Stack:", err.stack);
}
// Real-Life Example : Throwing Validation Error
*/

// Throwing User Defined Error with Error Constructor
/*
try {
  let age = 10;
  if (age >= 18) {
    console.log("You are eligible for voting");
  } else {
    console.log("You are not eligible");
    throw new Error("You are not Eligible");
    // Error is a generic constructor which will create Generic Error Object
  }
} catch (err) {
  console.log("\n\nI am From Error");
  console.log("Error Object:", err);
  console.log("Error Name:", err.name);
  console.log("Error Message:", err.message);
  console.log("Error Stack:", err.stack);
}
// Real-Life Example : To throw an semantic error rather than just logging.
// Real-Life Example : Backend-Server Programming
*/

// try-catch-finally Example
/*
try {
  let marks = 30;
  if (marks >= 35) {
    console.log("Congratulations! You Passed.");
  } else {
    throw new Error("Opps! Sorry, Better Luck Next Time.");
  }
} catch (err) {
  console.log("\nI am From Error");
  console.log("Error Object:", err);
  console.log("Error Name:", err.name);
  console.log("Error Message:", err.message);
  console.log("Error Stack:", err.stack);
} finally {
  // finally will be executed whether code is with error or with no error
  console.log("\n\nI am from Finally.");
  console.log("I am stubborn whether No Error or Error I will be executed");
  console.log("Test Over");
}
// Real Life Example : To close the Server or Connection irrespective of Output
*/

// Exception Handling of Promise
/*
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    let a = 1 + 2;
    if (a == 2) {
      resolve("Success");
    } else {
      //   reject("Failed");  === throw "Failed"
      reject(new Error("Failed"));
    }
  }, 3000);
});
*/

// with .then().catch().finally()
/*
p.then((response) => {
  console.log(response);
})
  .catch((err) => {
    // Gets called when promise is rejected or an exception is thrown
    console.log("\nI am From Error");
    console.log("Error Object:", err);
    console.log("Error Name:", err.name);
    console.log("Error Message:", err.message);
    console.log("Error Stack:", err.stack);
  })
  .finally(() => {
    console.log("\nI am From Finally");
    console.log("I am stubborn whether No Error or Error I will be executed");
  });
*/

// Using try-catch block with async await
/*
(async () => {
  try {
    const response = await p;
    console.log(response);
  } catch (err) {
    console.log("\nI am From Error");
    console.log("Error Object:", err);
    console.log("Error Name:", err.name);
    console.log("Error Message:", err.message);
    console.log("Error Stack:", err.stack);
  } finally {
    console.log("\n\nI am from Finally.");
    console.log("I am stubborn whether No Error or Error I will be executed");
  }
})(); // IIFE Method of Function Execution
*/
