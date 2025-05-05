/*
=> concatenates the string arguments to the calling string and returns a new string.

Todo: CAUTION !
=> It is strongly recommended that the assignment operators (+, +=) are used instead of the concat() method. because their performnce is much higher

*/


"Hello".concat("World") // HelloWorld
"Hello".concat("My","World", "Is", "Best") // HelloMyWorldIsBest

"Hello".concat(10) // Hello10
"Hello".concat(true) // Hellotrue
"Hello".concat(NaN) // HelloNaN

"Hello".concat({}) // Hello[object Object]
"Hello".concat(4, 5) // Hello45
