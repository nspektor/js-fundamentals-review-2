# Arrays
```js
var arrayName = [item1, item2, item3 ...] //like a list
var flavors = ["chocolate", "vanilla", "strawberry", "cookie dough" , "cotton candy"];

```
- slice: creates a new array with a part of the original array
```js
flavors.slice(2); // [strawberry", "cookie dough" , "cotton candy"]
    //returns an array with every element including and after
    //the second
flavors.slice(2, 4) //["strawberry", "cookie dough"]
    //returns an array with every element starting with the 2nd
    //and ending with the 3rd (the 4th is not included)
 ```
- splice: Inserts and/or removes elements in array. If any elements are removed, they are returned.
```js
//array.splice(positionToAddOrRemoveAt, HowManyElementsToRemove, elementToAdd, elementToAdd);
flavors.splice(2, 1, "mint", "rocky road"); //["strawberry"]
flavors //["chocolate", "vanilla", "mint", "rocky road", "cookie dough", "cotton candy"]
 ```
- pop(): removes the last element from the array
```js
flavors.pop(); // returns the removed (last) element : "cotton candy"
flavors //["chocolate", "vanilla", "mint", "rocky road", "cookie dough"]
 ```
- shift(): removes the first element of the array
```js
flavors.shift(); // returns the removed (first) element : "chocolate"
flavors //["vanilla", "mint", "rocky road", "cookie dough"]
 ```
- push(element): adds an element to the end of the array
```js
flavors.push("blue raspberry"); // returns the new length: 7
flavors //["chocolate", "vanilla", "mint", "rocky road", "cookie dough", "cotton candy", "blue raspberry"]
 ```
- unshift(element): adds an element to the beginning of the array
```js
flavors.unshift("blueberry"); // returns the new length: 7
flavors //["blueberry", "chocolate", "vanilla", "mint", "rocky road", "cookie dough", "cotton candy", "blue raspberry"]
 ```
- concat: called by an array and given another array (or more than one). adds the given arrays on to the end of the calling array.
```js
var family = ["mom", "dad", "sister"];
var friends = ["billy", "bob", "joe"];
var birthdayParty = family.concat(family, friends);
//birthdayParty will have: ["mom", "dad", "sister", "billy", "bob", "joe"]
 ```
- join: takes an array as a parameter and returns a string with all of the values in the array
```js
var famString = family.join();
//famString will be: "mom,dad,sister"
```

- indexOf: searches the array for the item given and returns its position (index)
```js
var bobPosition = friends.indexOf("bob");
//bobPosition will be: 1
```

[Practice](https://github.com/C4Q/AC3.1/blob/master/lessons/javascript-fundamentals/objects-and-arrays/array-methods-exercises.md)
