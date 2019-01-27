alert("HELLO!");
//create secretNumber
var secretNumber = 4;
//ask user for guess
var stringGuess = prompt("Guess a number");
var guess = Number(stringGuess);
//check guess
if(guess === secretNumber){
	alert("YOU GOT IT RIGHT!");
}
//otherwise, check if higher
else if(guess > secretNumber){
	alert("Too High. Guess again!");
}
//check if lower
else if(guess < secretNumber){
	alert("Too Low. Guess again!");
}