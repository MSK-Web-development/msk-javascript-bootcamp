/*
This method creates a new array that contains the elements holden on the
sub-array and flat it into the new array. Notice that, 

! This method will go only one level depth.
*/

const num = [1, 2, [3, 4], [5, 6, 7, [8, 9]]];

let result = num.flat();
console.log(result);
