// indexOf()

var arr = ['apple','orange','pear']

found = false;

for(var i= 0; i< arr.length; i++){
	if(arr[i] === 'apple'){ //'orange'
		found = true;
	}
}

function isItThere(arr, string){
	for(var i = 0; i < arr.length; i++){
		if(arr[i] === string){
			return "found"
		}
		return "nope"
	}
}

console.log(isItThere(arr, 'strawberry'));

// filter()
var oldArr = ["apple", "apple", "orange", "banana", "pear", "apple", "orange"];
var newArr = [];

function myFilter(arr, string){
	for(var i= 0; i< arr.length; i++){
      if(arr[i] === string ){ //"orange"
          newArr.push(arr[i]);
      }
    }
	return newArr;
}


console.log(myFilter(oldArr, "strawberry"));

console.log("Filter results:",newArr);

// forEach()

var arr = ["apple", "apple", "orange", "banana", "pear", "apple", "orange"];
// Uses the usual "for" loop to iterate
for(var i= 0, l = arr.length; i< l; i++){
	console.log(arr[i]);
}

// map()

var oldArr = ["apple", "apple", "orange", "banana", "pear", "apple","orange"];

var newArr = [];
for(var i= 0; i< oldArr.length; i++){
 		newArr[i] = oldArr[i].toUpperCase();
}
console.log(newArr);


// reduce()

var arr = [1, 3, 2, 4, 6, 10]; //sum = 26
var sum = 0;
for (var i = 0; i < arr.length; i++) {
	sum += arr[i];
}
console.log(sum);
