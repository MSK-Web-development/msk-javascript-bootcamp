/*
 Consider if we need to download a file from server3 only if server 1 and 2 are up
*/

const isServer1Up = true;
const isServer2Up = true;
const isServer3Up = true;

function getFileFromServer1(successCallback, failureCallback) {
  setTimeout(() => {
    if (isServer1Up) {
      successCallback();
    } else {
      failureCallback();
    }
  }, 1000);
}
function getFileFromServer2(successCallback, failureCallback) {
  setTimeout(() => {
    if (isServer2Up) {
      successCallback();
    } else {
      failureCallback();
    }
  }, 1000);
}
function getFileFromServer3(successCallback, failureCallback) {
  setTimeout(() => {
    if (isServer3Up) {
      successCallback();
    } else {
      failureCallback();
    }
  }, 1000);
}

// Notice the callback hell getting formed
getFileFromServer1(
  () => {
    getFileFromServer2(
      () => {
        getFileFromServer3(
          () => {
            console.log("File downloaded");
          },
          () => {
            console.log("Server 3 is down");
          }
        );
      },
      () => {
        console.log("Server 2 is down");
      }
    );
  },
  () => {
    console.log("Server 1 is down");
  }
);

// Now replace it with promises
const getFileFromServer1Promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isServer1Up) {
      resolve();
    } else {
      reject();
    }
  }, 1000);
});

const getFileFromServer2Promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isServer2Up) {
      resolve();
    } else {
      reject();
    }
  }, 1000);
});

const getFileFromServer3Promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    if (isServer3Up) {
      resolve();
    } else {
      reject();
    }
  }, 1000);
});

// Notice there is no hell getting formed
getFileFromServer1Promise
  .then(() => {
    return getFileFromServer2Promise;
  })
  .then(() => {
    return getFileFromServer3Promise;
  })
  .then(() => {
    console.log("File downloaded");
  })
  .catch(() => {
    console.log("Failed to download");
  });
