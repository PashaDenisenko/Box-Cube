$(document).ready(function(){

	$('.star').click(function(){

		if ($(this).hasClass('gold')) {
			$(this).prevAll('div').removeClass('gold').removeClass('grey').addClass('gold');
			$(this).nextAll('div').removeClass('gold').removeClass('grey').addClass('grey');
		} else if ($(this).hasClass('grey')) {
			$(this).removeClass('grey').addClass('gold');
			$(this).prevAll('div').removeClass('gold').removeClass('grey').addClass('gold');
			$(this).nextAll('div').removeClass('gold').removeClass('grey').addClass('grey');
		}

	});


	$('.content-choise-bottom p').click(function(){
		$('.write-a-comment').addClass('show');
	});

	$('.write-a-comment input:reset').click(function(){
		$('.write-a-comment').removeClass('show');
	});

	$('.write-a-comment input:submit').click(function(sent){
		if ($('.write-a-comment textarea').val() == '') {
			sent.preventDefault();
		}
	});

});