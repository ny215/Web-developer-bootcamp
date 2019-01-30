console.log("CONNECTED!");

function printReverse(list){
	for (var i = list.length - 1; i >= 0; i--) {
		console.log(list[i]);
	}
}
//test cases
var l1 = [1,2,3,4,5];
var l2 = ["A","B","C"];
var l3 =[];


function isUniform(list){
	var check = list[0];
	for (var i = 1; i < list.length; i++) {
		if(list[i] !== check){
			return false;
		}
	}
	return true;
}

function sumArray(list){
	var sum = 0;
	list.forEach(function(item){
		sum += item;
	});
	return sum;
}

function max(list){
	var currMax = list[0];
	list.forEach(function(item){
		if(item > currMax){
			currMax = item;
		}
	});
	return currMax;
}