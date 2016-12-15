
//Write a function named `sortArrNum` that takes in an array of numbers and returns the array sorted from lowest to highest.

sortArrNum([3, 5, 7, 1, 9, 0]);  // returns [0, 1, 3, 5, 7, 9]


//Write a function named `sortArrStr` that takes in an array of strings and returns the array sorted alphabetically.

sortArrStr(['cat', 'elephant', 'dog', 'walrus']);  // returns ['cat', 'dog', 'elephant', 'walrus']


//Write a function named `sortStr` that takes in a string and returns a string of the letters sorted alphabetically.

sortStr('hello');  // returns 'ehllo'
sortStr('big apple'); // returns ' abegilpp'

//Write a function named `arrReverse` that takes in an array of numbers and returns an array of numbers in the reverse order.


arrReverse([1, 2, 3, 4, 5]);  // returns [5, 4, 3, 2, 1]

//Write a function called `reverseStr` that uses the [`reverse`](http://www.w3schools.com/jsref/jsref_reverse.asp) method to reverse a string and return the reversed string. Do NOT use a typical loop; just use the `reverse` method.

reverseStr('hello'); //returns 'olleh'
reverseStr('when am i?'); //returns ?i ma nehw'

//Write a function named `sortObjs` that takes in an array of objects and sorts them alphabetically by their `name` property.

sortObjs([{name: 'lesane'}, {name: 'sean'}, {name: 'kendrick'}, {name: 'christopher'}, {name: 'young thug'}]);  // returns [{name: 'christopher'}, {name: 'kendrick'}, {name: 'lesane'}, {name: 'sean'}, {name: 'young thug'}]

//Write a function called `highLow` that uses the [`sort`](http://www.w3schools.com/jsref/jsref_sort.asp) method to sort an array of methods from high to low.

highLow([1,2,3,4,5]); //returns [5,4,3,2,1]
highLow([10,5,11,2,6,7,26]); //returns [26,11,10,7,6,5,2]

//Write a function named `checkDrinkingAge` that takes in an array of objects, each of which has a `name` property and `age` property. The function should return `true` if everyone's 21 or older, and should return `false` if anyone is under 21.

checkDrinkingAge([{name: "Adrian", age: 33}, {name: "Jojo", age: 23}, {name: "Cornelius", age: 26}]);  // returns true
checkDrinkingAge([{name: "Tommy", age: 22}, {name: "Chucky", age: 24}, {name: "Lil", age: 20}]); // returns false

//Write a function named `sort` that takes in an array of numbers and sorts them in order from lowest to highest. Do not use the built in `.sort` array method in your answer.

sort([11, 2, 36, 4, 15]);  // returns [2, 4, 11, 15, 36]


////////////////////////////////////////////////////////////////
// Write a function named `doesContain` that takes an array and a String and checks if the string is in the array using indexOf

var arr = ["apple","orange","pear"];
doesContain(arr, "apple");

// Write a function named `pickOut` that takes an array and a String and returns a new array with just the given string as many times as it is in the given array using filter()

var arr = ["apple", "apple", "orange", "banana", "pear", "apple","orange"];
pickOut(arr, "apple"); //returns ["apple","apple","apple"]

//Write a function named `logAll` that logs every element of the given array, using forEach()
var arr = ["apple","orange","pear"];
logAll(arr); //logs apple, orange, pear


//Write a function names `UpperIt` that returns a new array with the same elements as the given array except all in upper case, using filter()

UpperIt(arr); //returns ["APPLE", "ORANGE", "PEAR"]

// Write a function called `sumArr` that gets the sum of all of the values of the array, using reduce()

var numArr = [2, 4, 10];
sumArr(numArr); //returns 16
