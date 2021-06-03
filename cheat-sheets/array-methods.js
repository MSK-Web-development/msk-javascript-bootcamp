//* 🍇 Array methods

Array.isArray(array);
array.flat();
array.reverse();
array.flatMap(Fn);
array.forEach(Fn);
array.some(Fn);
array.sort((a, b) => a - b);
array.every(Fn);
array.fill(value, _start, _end);
array.filter(Fn);
array.find(Fn);
array.findIndex(Fn);
array.includes(item);
array.reduce((total, value) => total + value);

let array2 = Array.from(array1);
let newArray = Array.of(v1, _v2, _v3, _v4, etc);

let arrDeletedItems = arr.splice(start, deleteCount, item1, etc);

let newArray = array1.concat(array2);
let newArray = array.map(Fn);
