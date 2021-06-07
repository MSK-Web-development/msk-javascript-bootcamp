const downloadFile = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve("Hello world");
  }, 1000);
});

async function Fn() {
  const res = await downloadFile;
  console.log(res);
}

Fn();

// =========================================================================================================

// async-awat is syntactic sugar for promises
// async function always returns a promise

// Simple Example - It will return promise object

// const getTodos = async () => {};
// const todos = getTodos();
// console.log(todos);

// async will make this function as asynchronous (non-blocking) and inside this async function await will wait till the promise resolve this will make sequence data fetch

const getTodos = async () => {
  const res1 = await fetch("todos/user1.json");
  if (res1.status !== 200) {
    return Promise.reject(res1);
  }
  const user1 = await res1.json();

  const res2 = await fetch("todos/user2.json");
  if (res2.status !== 200) {
    return Promise.reject(res2);
  }
  const user2 = await res2.json();

  const res3 = await fetch("todos/user3.json");
  if (res3.status !== 200) {
    return Promise.reject(res3);
  }
  const user3 = await res3.json();

  return { user1, user2, user3 };
};

console.log("Fetching");

getTodos()
  .then((data) => console.table(data))
  .catch((err) => console.log(err));

console.log("Performing other task");

//  After running above piece of code you will see it will log the both console log and then after resolving the promise it will log the data
