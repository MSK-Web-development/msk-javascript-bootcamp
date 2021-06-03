const isServerUp = false;

function getFileFromServer(successCallback, failureCallback) {
  setTimeout(() => {
    if (isServerUp) {
      successCallback();
    } else {
      failureCallback();
    }
  }, 1000);
}

getFileFromServer(
  () => {
    console.log("File downloaded");
  },
  () => {
    console.log("Failed to download the file");
  }
);

//* Now Let's convert this callback into a promise

const downloadFile = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isServerUp) {
      resolve();
    } else {
      reject();
    }
  }, 1000);
});

downloadFile
  .then(() => {
    console.log("File downloaded");
  })
  .catch(() => {
    console.log("Failed to download the file");
  });
