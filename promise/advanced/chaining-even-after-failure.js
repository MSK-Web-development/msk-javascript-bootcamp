new Promise((resolve, reject) => {
  console.log('Initial');

  resolve();
})
  .then(() => {
    throw new Error('Something failed');

    console.log('Do this');
  })
  .catch(() => {
    console.error('Do that');
  })
  .then(() => {
    console.log('Do no matter what happened before');
  });

/*
This will output the following text:

Initial
Do that
Do no matter what happened before
*/