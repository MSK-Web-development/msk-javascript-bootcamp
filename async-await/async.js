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
