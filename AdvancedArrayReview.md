# Advanced array methods (including callbacks)
### sort()
###### sorts an array alphabetically or numerically (ascending or descending) can take a function as a parameter and will then sort based on the result of that function
```js
var points = [40, 100, 1, 5, 25, 10];
points.sort(function(a, b){return b-a}); //descending order
```
### reverse()
###### reverses the order of an array
```js
var points = [40, 100, 1, 5, 25, 10];
points.sort(); //[10, 25, 5, 1, 100, 40]
```
### every()
###### checks if every element meets a criteria (given as a function)
```js
var points = [40, 100, 1, 5, 25, 10];
points.every(function(point){
  return point > 15;
}); //false
```

### some()
###### checks if any of the elements meet the criteria given as a function
```js
var points = [40, 100, 1, 5, 25, 10];
points.some(function(point){
  return point > 15;
}); //true
```

### indexOf()
###### Returns the first index at which a given element can be found in the array, or -1 if it is not present.

Example of a function that checks if the given string is in the given array, using IndexOf:
```js
var fruits = ["apple", "orange", "banana"];

function isItThere(arr, string){
	var isFound = arr.indexOf(string) != -1;
	return isFound;
}
console.log("was it found? (with indexOf): ", isItThere(fruits, "apple"));
```
The function does the same thing but without indexOf, much more code is needed: *writing these yourself is the best way to understand it, so only look at this after you've tried it on your own*
```js
var fruits = ["apple", "orange", "banana"];

function isItThereWithoutIndexOf(arr, string){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === string){
			return true;
		}
		return false;
	}
}
console.log("was it found? (without indexOf): ", isItThereWithoutIndexOf(fruits, "apple"));
 ```

### filter()
###### Creates a new array with all elements that pass the test in the function that you pass as a parameter to filter().
```js
var fruits = ["apple", "apple", "orange", "banana", "pear", "apple", "orange"];

function getApples(arr){
	var newArr = [];
	var newArr = arr.filter(function(item){
	    return item === "apple";
	});
	return newArr;
}
console.log("apples (with filter):", getApples(fruits));
```
The function does the same thing but without filter:

```js
var fruits = ["apple", "apple", "orange", "banana", "pear", "apple", "orange"];
function getApplesWithoutFilter(arr){
	var newArr = [];
	for(var i= 0; i< arr.length; i++){
      if(arr[i] === "apple" ){
          newArr.push(arr[i]); //String method!
      }
    }
	return newArr;
}
console.log("apples (with filter):", getApplesWithoutFilter(fruits));
```

### forEach()
###### executes the given function on each element in the array
```js
var fruits = ["apple", "apple", "orange", "banana", "pear", "apple","orange"];
fruits.forEach(function(item, index, array){
  // function params can be named whatever but the order will still be item, index, array
  //if only one is given, it will be item (only 2 - item, and index)
	console.log(item);
});
```

Here's an example function which turns each item of the array into all capital letters:

```js
var fruits = ["apple", "apple", "orange", "banana", "pear", "apple","orange"];

function capitalizeWithForEach(arr){
  arr.forEach(function(fruit){
    fruit = fruit.toUpperCase();
  }
}
console.log("capialized array: (with forEach)", capitalizeWithForEach(fruits));
```

Here's a function that does the same thing but without forEach

```js
var fruits = ["apple", "apple", "orange", "banana", "pear", "apple","orange"];

function capitalizeWithoutForEach(arr){
  for(var i= 0, i < arr.length; i++){
    arr[i] = arr[i].toUpperCase();
  }
}
console.log("capialized array: (without forEach)", capitalizeWithoutForEach(fruits));

```

### map()
###### Creates a new array with the results from executing the given function for each element in the array

```js
var fruits = ["apple", "apple", "orange", "banana", "pear", "apple","orange"];

function capitalizeWithMap(arr){
  var newArr = arr.map(function(fruit){
         return fruit.toUpperCase();
  });  
  return newArr;
}
var newFruits = capitalizeWithMap(fruits);
console.log("capitalized array: (with map)", newFruits);
```
Here's a function that does the same thing but without map

```js
var fruits = ["apple", "apple", "orange", "banana", "pear", "apple","orange"];

function capitalizeWithoutMap(arr){
  var newArr = [];
  for(var i= 0; i< arr.length; i++){
   		newArr[i] = arr[i].toUpperCase();
  }
  return newArr;
}
var newFruits = capitalizeWithoutMap(fruits);
console.log("capitalized array: (without map)", newFruits);
```
*Difference between forEach and map: forEach modifies the original array, map creates a new array*

### reduce()
###### Reduces the array to a single value by executing the given function on each value and the result (or total) of the  execution on the previous value in the array.
```js
var fruits = ["apple", "apple", "orange", "banana", "pear", "apple","orange"];

function combineIntoStringWithReduce(arr){
  var stringOfArrayContents;
  stringOfArrayContents.reduce(function(StringSoFar, item){
    return StringSoFar + ", " + item;
  });
  return stringOfArrayContents;
}
var stringOfFruits = combineIntoStringWithReduce(fruits);
console.log("capitalized array: (with reduce)", stringOfFruits);
```
Here's the function that does the same thing, but without reduce:
```js
var fruits = ["apple", "apple", "orange", "banana", "pear", "apple","orange"];

function combineIntoStringWithoutReduce(arr){
  var stringOfArrayContents;
  for(var i= 0; i< arr.length; i++){
   		stringOfArrayContents += ", ", arr[i];
  }
  return stringOfArrayContents;
}
var stringOfFruits = combineIntoStringWithoutReduce(fruits);
console.log("capitalized array: (without reduce)", stringOfFruits);
```


[source](http://colintoh.com/blog/5-array-methods-that-you-should-use-today)
