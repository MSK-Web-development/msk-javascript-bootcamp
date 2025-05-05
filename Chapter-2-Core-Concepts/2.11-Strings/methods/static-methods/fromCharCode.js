
/*
=> The static String.fromCharCode() method returns a string created from the specified sequence of UTF-16 code units.
=> This method returns a string and not a String object.
=> UTF-16 table -> https://asecuritysite.com/coding/asc2
*/

String.fromCharCode(189, 43, 190, 61); // output: "½+¾="
String.fromCharCode(65, 66, 67);   // returns "ABC"
String.fromCharCode(0x2014); // returns "—"
String.fromCharCode(0x12014); // also returns "—"; the digit 1 is truncated and ignored
String.fromCharCode(8212); // also returns "—"; 8212 is the decimal form of 0x2014