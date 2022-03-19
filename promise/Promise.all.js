/*
  Promise.All is used to parallelly execute all promises and resolve when all of 
  them complete.
 */

const downloadFile1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("File 1 downloaded");
  }, 1000);
});

const downloadFile2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("File 2 downloaded");
  }, 100);
});

const downloadFile3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("File 3 downloaded");
  }, 10);
});

Promise.all([downloadFile1, downloadFile2, downloadFile3])
  .then((messagesArray) => {
    messagesArray.forEach((message) => {
      console.log(message);
    });
  })
  .catch(() => {
    console.log("Failed to download");
  });
/*
    Output:
    File 1 downloaded
    File 2 downloaded
    File 3 downloaded
*/

/*
! Beware
  Promise.all has a fail-fast behaviour. 
  If a given promise is rejected, the resulting promise of 
  Promise.all will be rejected at this exact moment. 
  
  It will not wait for the other promises to complete, and the 
  only received data is the error of the rejected request. 

  See the below code 👇
*/
let p1 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'p1');
});

let p2 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'p2');
});

let p3 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1200, 'p3');
});

let p4 = new Promise(function(resolve, reject) {
    setTimeout(reject, 300, 'p4');
});

let p5 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 800, 'p5');
});

let promise = Promise.all([p1, p2, p3, p4, p5]);

promise

.then(function(data) {
    data.forEach(function(data) {
        console.log(data);
    });
})

.catch(function(error) {
    console.error('error', error);
});

/*
*Output 

error p4

As you can see, error p4 is displayed. We can't access the result of the other promises. You should only use Promise.all when you need for all of your promises to resolve successfully.
*/

/*
  What if you want to start multiple asynchronous jobs at once and you want results even if a job is rejected? Just use catch. 
  
  See the following example.

  In this example, we don't give the promises directly to Promise.all. We give the result of p.catch (this is an auto-resolved promise) so Promise.all won't stop. In this case, however, you have to test the received data yourself to check for errors.
*/

let p11 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 500, 'p1');
});

let p22 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1000, 'p2');
});

let p33 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 1200, 'p3');
});

let p44 = new Promise(function(resolve, reject) {
    setTimeout(reject, 300, 'p4');
});

let p55 = new Promise(function(resolve, reject) {
    setTimeout(resolve, 800, 'p5');
});

let myPromise = Promise.all([
   p11.catch(()=>{}),
   p22.catch(()=>{}), 
   p33.catch(()=>{}), 
   p44.catch((error)=>{return error;}),
   p55.catch(()=>{})]
   )

  myPromise.then(data=>{
    data.forEach((data)=>{
      console.log(data)
    })
  })


/*
*Output

p1
p2
p3
p4
p5
*/
