/*
This method receives a function as an argument and will apply it to the
array. It returns the value of an element found in the array and which 
satisfies the test function. Otherwise, it returns undefined.

*/

const numbers = [1, 2, 4, 6, 8, 10, 12, 13, 14, 16, 19];

const found = numbers.find((element, _index, _array) => {
  numbers.push(25); // will NOT be affected
  numbers.pop(); // will be affected
  numbers[1] = 20; // will be affected

  return element > 15;
});

console.log(found);
