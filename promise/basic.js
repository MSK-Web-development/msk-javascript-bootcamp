//* creation
let p = new Promise((resolve, reject) => {
  setTimeout(() => {
    let a = 1 + 3;
    if (a == 3) {
      resolve("Success");
    } else {
      reject("Failed");
    }
  }, 3000);
});

// Way 1
p.then((response) => {
  console.log("here")
  console.log(response);
})
  .catch((e) => {
    // Gets called when promise is rejected or an exception is thrown
    console.log("error", e);
  })

   // Gets called after completion regardless 
  .finally(() => {
    console.log("Completed promise");
  });



// Way 2
p.then((successResponse) => {
  console.log(successResponse);
}, (errorResponse)=>{
   console.log(errorResponse);
})

