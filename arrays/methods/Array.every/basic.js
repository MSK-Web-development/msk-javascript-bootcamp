// The every() method tests whether all elements in the array pass the test implemented
// by the provided function

// Note: For an empty array, result is true
// Note: Iteration stops immediately after a falsy return expression ( with or w/o array modification )


const fruits = ["apple", "banana", "orange"];

const thisValue = {
  cat: "fluffy"
};

const isFruitString = (fruit, index, array) => {
  console.log(thisValue);
  console.log(index);
  console.log(array);

  return typeof fruit === 'string'

}

const result = fruits.every(isFruitString, thisValue)

console.log(result)

