alert("connected!");
function isEven(num){
	if(Number(num) % 2 == 0){
		return true;
	}
	return false;
}

function factorial(num) {
	var res = 1;
	while(num != 0){
		res = res * num;
		num -= 1;
	}
	return res;
}

function kebabToSnake(char) {
	var res = char.replace(/-/g, "_");
	return res;
}