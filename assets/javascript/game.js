
var wins = 0;
var losses = 0;
var guessesleft = 3;

document.onkeyup = function(event) {
	guessesleft--;
	document.querySelector("#GuessesLeft").innerHTML = ("Guesses left: "+guessesleft);
	
	var userInput = String.fromCharCode(event.keyCode).toLowerCase();
	console.log(userInput);


	document.querySelector("#Guesses").innerHTML = ("Your Guesses so far: " + userInput);
		
	
	if (userInput == 'b') {
		guessesleft = 3;
		wins++;
		document.querySelector("#Wins").innerHTML = ("Wins: "+wins);
		console.log("Correct!");
	}

	else {
		console.log("Wrong!");
	}

	if (guessesleft == 0) {
			guessesleft = 3;
			losses++;
			document.querySelector("#Losses").innerHTML = ("Losses: "+losses)
		}
}
