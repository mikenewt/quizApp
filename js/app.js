var questionCount = 0;

$(document).ready(function () {

	$('a').click(function(event) {
		console.log("Handler for anchor text preventDefault() called!");
		event.preventDefault();
	});

	$('#start-game').click(function(event) {
		console.log("Handler for submit preventDefault() called!");
		event.preventDefault();
	})

	$('#start-game').click(startGame);

	$('#what').click(function() {
		$('.overlay-content').slideToggle();
	});

	$('#close-overlay').click(function() {
		$('.overlay-content').slideUp();
	});






})

function startGame() {

	console.log("Running startGame()!");
	
	var gameContent = $('.game-content');
	var input = $('#answer-input');
	var questionBubbles = $('#bottom-content');
	var startButton = $('#start-game')

	startButton.css('display', 'none');
	gameContent.css('display', 'inline-block');
	input.css('display', 'inline-block');
	questionBubbles.css('display', 'inline-block');

	getQuestion();
}

function getQuestion() {

	var questions = [];
	var questionContainer = $('#starter-content li')

	for(var i = 0; i < questionContainer.length; i++) {
		questions.push(questionContainer[i]);
	}

}