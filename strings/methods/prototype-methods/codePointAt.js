/*
=> returns a non-negative integer that is the Unicode code point value.


*/

const icons = '☃★♲';

icons.codePointAt(1); // 9733

icons.codePointAt(0); // 9731
icons.codePointAt(900); // undefined
