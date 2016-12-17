var fruits = ["apple", "apple", "orange", "banana", "pear", "apple", "orange"];

//-------------------------------- indexOf ----------------------

//does what indexOf does:

function isItThere(arr, string){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === string){
			return true
		}
		return false
	}
}
console.log("was it found?: ", isItThere(fruits, "apple"));

//doing the same thing but with indexOf:

var isFound = fruits.indexOf("apple") != -1;
console.log("was it found?: ", isFound);

//-------------------------------- Filter --------------------

//does what filter does:

function myFilter(arr, string){
	for(var i= 0; i< arr.length; i++){
      if(arr[i] === string ){ //"orange"
          newArr.push(arr[i]);
      }
    }
	return newArr;
}
console.log(myFilter(fruits, "apple"));


//doing the same thing, but with filter:
var newArr = [];
var newArr = fruits.filter(function(item){
    return item === "apple";
});
console.log("Filter results:", newArr);


//------------------------------ ForEach ------------------

function toUpperCase(arr){
  for(var i= 0, l = arr.length; i< l; i++){
    arr[i] = arr[i].toUpperCase
  }
}

//with forEach

function toUpperCaseWithForEach(arr){
  arr.forEach(function(item){
    item = item.toUpperCase;
  }
}

console.log(toUpperCase(fruits));
console.log(toUpperCaseWithForEach(fruits));
