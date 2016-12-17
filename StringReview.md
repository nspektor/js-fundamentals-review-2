# Strings
 - indexOf(searchValue): returns where the searchValue is in the String
 ```js
 var str = "Hello, World";
 str.indexOf("o"); // 4
 str.indexOf("World"); //7

 ```
 - substring(start, end): returns a subset of the string between the start and end numbers
   - the start value is included in the output but the end value is not

 ```js
  str.substring(4,5); // "o"
  str.substring(7); //"World"
  str.substring(7,9); //"Wo"

  ```
 - toUpperCase(): returns a string just like the original string, except all characters in the String are Upper Case
 - toLowerCase(): returns a string just like the original string, except all characters in the String are Lower Case
 ```js
  str.toLowerCase(); // "hello, world"
  str.toUpperCase(); // "HELLO, WORLD"
  ```
 - charAt(index): returns the character at the specified index in the String
 - charCodeAt(index): returns the unicode value of the character at the specified index in the String
 ```js
  str.charAt(0); // "H"
  str.charCodeAt(0); // 72

  ```
 - split(separator): returns an array of strings which is the given string split up based on the separator
  ```js
  str.split(","); //["Hello", " World"]

  ```
 - length: returns the length of the String
 ```js
 str.length; //12

 ```
[Practice]( https://github.com/C4Q/AC3.1/blob/master/lessons/javascript-fundamentals/types-strings-and-numbers/types-and-strings-exercises.md)
