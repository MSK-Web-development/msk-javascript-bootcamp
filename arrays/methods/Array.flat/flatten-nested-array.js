var inputArray = [1, 2, [3, 4, [5, 6]], 9];

// //* Method 1
let result = inputArray.flat(2);
console.log(result);

//* Method 2 | Recursion
let result = [];
function flattenArray(inputArray) {
  inputArray.forEach((element) => {
    if (Array.isArray(element)) {
      flattenArray(element);
    } else {
      result.push(element);
    }
  });
  return result;
}

console.log(flattenArray(inputArray));
