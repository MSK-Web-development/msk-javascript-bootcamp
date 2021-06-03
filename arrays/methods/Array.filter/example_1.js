// Search with a substring in an array of strings

const searchInTheArray = (array, query) => {
  return array.filter((element) => {
    if (element.toLowerCase().includes(query.toLowerCase())) return element;

  })
}

const fruits = ["apple", "banana", "orange", "grape", "mango"];

console.log(searchInTheArray(fruits, 'ap')); // [ 'apple', 'grape' ]