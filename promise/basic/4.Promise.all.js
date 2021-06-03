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

/*

* Definition

Promise.All is used to parallelly execute all promises and resolve when all of 
them complete.

 */

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
    Output File 1 downloaded
    File 2 downloaded
    File 3 downloaded
*/

/*
* Definition

Promise.race will return the moment the first promise is returned.

 */

Promise.race([downloadFile1, downloadFile2, downloadFile3]).then((message) => {
  console.log(message);
});
// Output : File 3 downloaded
