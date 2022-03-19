/*
* Definition

Promise.race will return the moment the first promise is returned.

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

Promise.race([downloadFile1, downloadFile2, downloadFile3]).then((message) => {
  console.log(message);
});
// Output : File 3 downloaded
