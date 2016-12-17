

//-------------------------------- indexOf ----------------------
var fruits = ["apple", "orange", "banana"];

function isItThere(arr, string){
	var isFound = arr.indexOf(string) != -1;
	return isFound;
}
console.log("was it found? (with indexOf): ", isItThere(fruits, "apple"));

//does the same thing but withbut without using indexOf:
//(see how much more code is needed)

function isItThereWithoutIndexOf(arr, string){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === string){
			return true;
		}
		return false;
	}
}
console.log("was it found? (without indexOf): ", isItThereWithoutIndexOf(fruits, "apple"));

//-------------------------------- Filter --------------------
var fruits = ["apple", "apple", "orange", "banana", "pear", "apple", "orange"];

function getApples(arr){
	var newArr = [];
	var newArr = arr.filter(function(item){
	    return item === "apple";
	});
	return newArr;
}
console.log("apples (with filter):", getApples(fruits));

//does the same thing but withbut without using filter:

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
