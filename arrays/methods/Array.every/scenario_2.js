
// Iteration stops if all elements are popped off

const fruits = ["apple", "banana", "orange"];

const result = fruits.every((fruit, index, arr) => {
  arr.pop();
  console.log(arr)
  return typeof fruit === 'string'
})

console.log(result);

//-----------------------------------------------------------

/* Output

[ 'apple', 'banana' ]
[ 'apple' ]
true

*/