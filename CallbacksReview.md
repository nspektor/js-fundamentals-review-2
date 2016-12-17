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

```js
var arr = ['apple','orange','pear'];
var isFound = arr.indexOf("apple") != -1;
console.log("was it found?: ", isFound );
 ```
 1) write in english what is happening above
 2) copy over the code
 3) change the function so that it looks for the orange instead
 4) write code that does the same thing as the above but without indexOf

### filter()
###### Creates a new array with all elements that pass the test in the function that you pass as a parameter to filter().
```js
var arr = ["apple", "apple", "orange", "banana", "pear", "apple","orange"];
var newArr = [];
var newArr = arr.filter(function(item){
    if(item.indexOf("a") != -1){
      return true;
    }
});
var newNewArr = newArr.map(function(iten){
  var upItem = item.toUpperCase();
  return upItem;
})
console.log("Filter results:", newNewArr);

```
1) write in english what is happening above
2) copy over the code
3) change the function so that it looks for oranges instead
4) write code that does the same thing as the above but without filter()

### forEach()
###### executes the given function on each element in the array
```js
var arr = ["apple", "apple", "orange", "banana", "pear", "apple","orange"];
arr.forEach(function(item, index, array){
  // function params can be named whatever but the order will still be item, index, array
  //if only one is given, it will be item (only 2 - item, index)
	console.log(item);
});
```

1) write in english what is happening above
2) copy over the code
3) change the function so that it logs the item, index, and array instead
4) write code that does the same thing as the above but without forEach()

### map()
###### Creates a new array with the results from executing the given function for each element in the array

```js
var oldArr = ["apple", "apple", "orange", "banana", "pear", "apple","orange"];

 var newArr = oldArr.map(function(item){
 				return item.toUpperCase();
 });

console.log(newArr);
```
1) write in english what is happening above
2) copy over the code
3) write code that does the same thing as the above but without map()

### reduce()
###### Reduces the array to a single value by executing the given function on each value and the result (or total) of the  execution on the previous value in the array.


```js
var arr = [1, 3, 2, 4, 6, 10]; //sum = 26
var sum = arr.reduce(function(total, num){
	return total + num;
})

console.log(sum);
```

1) write in english what is happening above
2) copy over the code
3) write code that does the same thing as the above but without reduce()

[source](http://colintoh.com/blog/5-array-methods-that-you-should-use-today)
