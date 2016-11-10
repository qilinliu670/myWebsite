var main = function() {
	$('#home-link').addClass('selected');
	$('#home').addClass('current');
	$('#transcript').hide();
	$('#about').hide();
	$('.link').click(function() {
		if($(this).hasClass('selected')) return;
		$('.selected').removeClass('selected');
		$(this).addClass('selected');
		$('.current').hide();
		if($(this).is('#home-link'))
			$('#home').fadeIn(500).addClass('current');
		else if($(this).is('#transcript-link'))
			$('#transcript').fadeIn(500).addClass('current');
		else $('#about').fadeIn(500).addClass('current');
	});
};
$(document).ready(main);