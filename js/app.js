$(document).ready(function () {

	$('a').click(function(e) {
		e.preventDefault();
	});

	$('#what').click(function() {
		$('.overlay-content').slideToggle();
	});

	$('#close-overlay').click(function() {
		$('.overlay-content').slideUp();
	});






})