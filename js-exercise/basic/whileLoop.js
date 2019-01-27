alert("CONNECTED!!");
//print all numbers between -10 and 19
console.log("set 1")
var num1 = -10;
while(num1 <= 19){
	console.log(num1);
	num1++;
}

//print all even numbers between 10 and 40
console.log("set 2")
var num2 = 10;
while(num2 <= 40){
	console.log(num2);
	num2 = num2 + 2;
}

//print all odd numbers between 300 and 333
console.log("set 3")
var num3 = 300;
while(num3 <= 333){
	if(num3 % 2 != 0){
		console.log(num3);
	}
	num3++;
}

//print all numbers divisible by 5 and 3 between 5 and 50
console.log("set 4")
var num4 = 5;
while(num4 <= 50){
	if((num4 % 5 === 0) &&(num4 % 3 === 0)){
		console.log(num4);
	}
	num4++;
}
