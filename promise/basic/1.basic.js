//* creation
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    let a = 1 + 1;
    if (a == 2) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  }, 3000);
});

p.then((response) => {
  console.log(response);
})
  .catch((e) => {
    // Gets called when promise is rejected or an exception is thrown
    console.log("error", e);
  })
  .finally(() => {
    console.log("Completed promise");
  });
