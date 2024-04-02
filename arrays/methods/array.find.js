/*
This method receives a function as an argument and will apply it to the
array. It returns the value of the first matching element found in the array and which 
satisfies the test function. Otherwise, it returns undefined.
*/

const numbers = [1, 2, 4, 6, 8, 10, 12, 13, 14, 16, 19];

const found = numbers.find((element, _index, _array) => {
  return element > 15;
});

console.log(found);
//Output: 16
