/*
### Option One: Basic Quiz (Timed Form)

* You'll create a trivia form with multiple choice or true/false options (your choice).

* The player will have a limited amount of time to finish the quiz. 
  * The game ends when the time runs out. The page will reveal the number of questions that players answer correctly and incorrectly.

* Don't let the player pick more than one answer per question.

* Don't forget to include a countdown timer.

### Option Two: Advanced Assignment (Timed Questions)

* You'll create a trivia game that shows only one question until the player answers it or their time runs out.

* If the player selects the correct answer, show a screen congratulating them for choosing the right option. After a few seconds, display the next question -- do this without user input.

* The scenario is similar for wrong answers and time-outs.
  * If the player runs out of time, tell the player that time's up and display the correct answer. Wait a few seconds, then show the next question.
  * If the player chooses the wrong answer, tell the player they selected the wrong option and then display the correct answer. Wait a few seconds, then show the next question.

* On the final screen, show the number of correct answers, incorrect answers, and an option to restart the game (without reloading the page).
*/
$(document).ready(function() {
	//import JSON file with array of objects and start printing to screen
	$.getJSON( "assets/javascript/questions.json", function( json ) {
		for (var i = 0 ; i < answers.length ; i++) {
			$("#image").html(answers[i].img);
			for (var j = 0 ; j < answers[i].answer.length ; j++) {
				var $answer = $('<input type="radio" src=' +answers[i].answer+ '>');
				$("#answers").text($answer);
			}
		}
	});

})