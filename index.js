var target = '#landing';

// $(document).ready(function(){
//     $('html, body').animate({
//         scrollTop: $(target).offset().top
//     }, 250);
//     // // Remove the # from the hash, as different browsers may or may not include it
//     // var hash = location.hash.replace('#','');

//     // if(hash != ''){
//     //     // Show the hash if it's set
//     //     alert(hash);

//     //     // Clear the hash in the URL
//     //     location.hash = '';
//     // }
// });

$('.navbar-link').click(function() {
	$('.navbar-item').removeClass('active');
	$('.navbar-link').removeClass('mint-text');
	$(this).parent().addClass('active');
	$(this).addClass('mint-text');
});

$('.about-button').click(function() {
	var match = $(this).attr('href');
	$.each($('.navbar-link'), function() {
		if($(this).attr('href') == match) {
			$('.navbar-link').removeClass('mint-text');
			$(this).addClass('mint-text');
			$('.navbar-item').removeClass('active');
			$(this).parent().addClass('active');
		}
	});
});

$(document).on('click', 'a[href^="#"]', function (event) {
    event.preventDefault();
    target = $.attr(this, 'href');	
    $('html, body').animate({
        scrollTop: $(target).offset().top
    }, 500);
});	

$('#mobile-menu-button').click(function() {
	$('#mobile-menu').toggleClass('hidden');
});

$('.mobile-menu-link').click(function() {
	$('#mobile-menu').addClass('hidden');
});

$('#contact-form').submit(function(e) {
	var name = $('#input-name');
	var email = $('#input-email');
	var number = $('#input-number');
	var company = $('#input-company');
	var message = $('#input-message');

	if(!name.value || !name.email || !name.message) {

	} else {

	}
});

$('#input-message').autoResize();