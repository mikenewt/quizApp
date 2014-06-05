var userAnswer, question, qNum = 0;
var questionLibrary = [{'questionNumber': 1,
						'lyrics': 'Good eye sniper! I shoot, you run',
						'answer': 'afavorhouseatlantic'},
						{'questionNumber': 2,
						 'lyrics': 'Sir, I think you\'d better take my hand and pray we\'ll make this one out alive',
						 'answer': 'junesongprovision'},
						{'questionNumber': 3,
						 'lyrics': 'Pain is only a pulse if you just stop feeling it',
						 'answer': 'timeconsumer'},
						{'questionNumber': 4,
						 'lyrics': 'If he\'s not here then where?',
						 'answer': 'theafterman'},
						{'questionNumber': 5,
						 'lyrics': 'I gave my everything for all the wrong things',
						 'answer': 'darksideofme'}];

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

	$('#answer-input').keydown(function(event) {
		if (event.which == 13) {
			event.preventDefault();
			answerQuestion();
		}
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
	input.focus();
	questionBubbles.css('display', 'inline-block');

	getQuestion();
}

function getQuestion() {

	var questionContainer = $('#starter-content')

	// get a question from the questionDict where the key = questionCount and store in question variable
	question = questionLibrary[qNum]['lyrics'];
	console.log(question);

	// dump question text into li .question-content
	questionContainer.append("<li class='question-content'>" + question + "</li>");
	qNum = qNum++;
	
}

function answerQuestion() {
	
	userAnswer = $('#answer-input').val();
	userAnswer = userAnswer.toLowerCase();
	userAnswer = userAnswer.replace(/\s/g,'');
	console.log(userAnswer);

	var answer = questionLibrary[qNum]['answer']
	console.log(answer);

	if(userAnswer === answer) {
		$('#progress-tracker li:nth-child(1)').removeClass('unanswered').addClass('correct');
	} else {
		$('#progress-tracker li:nth-child(1)').removeClass('unanswered').addClass('incorrect');
	} 

}

function validateInput() {
	
}