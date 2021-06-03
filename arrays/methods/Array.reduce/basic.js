/*
This method receives a function which has an accumulator and a value as an 
argument. It applies the function to the accumulator and each value in the 
array to return at the end just a single value.
*/

const num = [1, 2, 3, 4];

let result = num.reduce((total, value) => {
  return total + value;
});

console.log(result);
