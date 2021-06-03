
// Iteration happens only 3 times even if you append more items in the callback

const fruits = ["apple", "banana", "orange"];

const result = fruits.every((fruit, index, arr) => {
  arr.push("grapes" + index)
  console.log(arr)
  return typeof fruit === 'string'
})

console.log(result);

//-----------------------------------------------------------

/* Output

[ 'apple', 'banana', 'orange', 'grapes0' ]
[ 'apple', 'banana', 'orange', 'grapes0', 'grapes1' ]
[ 'apple', 'banana', 'orange', 'grapes0', 'grapes1', 'grapes2' ]
true

*/