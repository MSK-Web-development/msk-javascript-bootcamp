//* 🍇 Array methods

Array.isArray(array);
array.flat();
array.reverse();
array.flatMap(Fn);
array.forEach(Fn);
array.some(Fn);
array.sort((a, b) => a - b);
array.every(Fn);
array.fill(value, start, end-1);
array.filter(Fn);
array.find(Fn); // returns first result
array.findIndex(Fn);
array.includes(item);
array.reduce((total, value) => total + value);

let array2 = Array.from(array1);
let newArray1 = Array.of(v1, _v2, _v3, _v4, etc);

let sliecdArray = arr.slice(start, end-1); // No mutation
let arrDeletedItems = arr.splice(start, deleteCount, item1, etc); // mutation

let newArray2 = array1.concat(array2);
let newArray3 = array.map(Fn);
