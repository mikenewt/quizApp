var userAnswer, question, qNum = 0, points = 0; totalQuestions = 4;

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

$(document).ready(function() {

	initializeBubbles();

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

	$('#new-game').click(newGame);

	$('#answer-input').keydown(function(event) {
		if (event.which == 13) {
			event.preventDefault();
			answerQuestion();
		}
	});




});

function initializeBubbles() {

	var questionId, answerBubble;

	for (i = 0; i <= totalQuestions; i++) {
		questionId = "question-" + i;
		answerBubble = '<li class="question-bubble unanswered" id=' + questionId + '>?</li>';
		$('#progress-tracker').append(answerBubble);
	}
}

function newGame() {
	
	qNum = 0;
	startGame();
	resetBubbles();

	if ($('#top-final').hasClass('visible')) {
		hide($('#top-final'))
	}

	if ($('#top-starter').hasClass('hidden')) {
		show($('#top-starter'))
	}
}

function startGame() {

	console.log("Running startGame()!");
	
	show($('.game-content'));
	show($('#bottom-content'));
	hide($('#start-game'));

	var input = $('#answer-input');
	show(input)
	input.text('');
	input.focus();

	getQuestion();
}

function getQuestion() {

	var questionContainer = $('#starter-content');

	question = questionLibrary[qNum]['lyrics'];
	console.log(question);

	// dump question text into li .question-content
	questionContainer.append("<li class='question-content visible'>" + question + "</li>");

	console.log('qNum at getQuestion runtime: ' + qNum)
	
}

function answerQuestion() {

	userAnswer = $('#answer-input').val();
	userAnswer = userAnswer.toLowerCase();
	userAnswer = userAnswer.replace(/\s/g,'');
	console.log(userAnswer);

	var answer = questionLibrary[qNum]['answer']
	console.log(answer);

	if (validateInput(userAnswer)) {
		if(userAnswer === answer) {
			points = points + 1;
			changeBubble('correct');
			nextQuestion();
		} else {
			// $('#progress-tracker li:nth-child(1)').removeClass('unanswered').addClass('incorrect');
			// $('#answer-input').val('');
			changeBubble('incorrect');
			nextQuestion();
		}
	} else {
		userAnswer = '';
	}
}

function validateInput() {
	if (userAnswer === undefined || userAnswer === null || userAnswer === "") {
		alert('Invalid input. Please try again.');
		return false;
	} else {
		return true;
	}
}

function changeBubble(style) {
	
	$('#question-' + qNum).removeClass('unanswered').addClass(style);
	$('#answer-input').val('');
	$('#answer-input').focus();

}

// different from getQuestion: increments qNum first + dumps previous li and replaces with new question
function nextQuestion() {

	console.log('nextQuestion() called!')

	qNum = qNum + 1;
	console.log(qNum);

	if (qNum > totalQuestions) {
		finalize();
		return
	}

	hide($('.question-content'));
	

	getQuestion();

}

function finalize() {

	// a work-around for two different 0-based (questionLibrary) and 1-based indices (number of questions)
	totalQuestions = totalQuestions + 1
	
	console.log('finalize() called!');
	console.log('totalQuestions = ' + totalQuestions);

	// empty question li's and hide question/input content
	$('#starter-content li').text('');
	hide($('#top-starter'));
	hide($('#answer-input'));

	// show final score
	show($('#top-final'))
	$('#score').text('You scored: ' + points + ' out of ' + totalQuestions)	
}

function resetBubbles() {

	var bubbles = $('#progress-tracker li').length;
	for (i = 0; i < bubbles; i++) {
    	if ($('.question-bubble').hasClass('correct') || $('.question-bubble').hasClass('incorrect')) {
        	$('.question-bubble').removeClass('correct incorrect').addClass('unanswered');
    	}
	}
}

function show(element) {
	element.removeClass('hidden').addClass('visible');
}

function hide(element) {
	element.removeClass('visible').addClass('hidden');
}