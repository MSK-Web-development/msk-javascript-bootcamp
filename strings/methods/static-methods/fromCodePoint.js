/*

=> returns a string created by using the specified sequence of code points.

=> A RangeError is thrown if an invalid Unicode code point is given (e.g. "RangeError: NaN is not a valid code point").
=> This method returns a string (and not a String object).



*/

String.fromCodePoint(9731, 9733, 9842, 0x2F804); // expected output: "☃★♲你"
String.fromCodePoint(42);       // "*"
String.fromCodePoint(65, 90);   // "AZ"
String.fromCodePoint(0x404);    // "\u0404" == "Є"
String.fromCodePoint(0x2F804);  // "\uD87E\uDC04"
String.fromCodePoint(194564);   // "\uD87E\uDC04"
String.fromCodePoint(0x1D306, 0x61, 0x1D307); // "\uD834\uDF06a\uD834\uDF07"
