window.sr = new scrollReveal(); //initiate scrollReveal.js

var mn = $(".main-nav");
var viewHeight = $(window).height();
var navHeight = $(".main-nav").height();

//Sticky nav fade in on scroll
$(window).scroll(function() {
	if( $(this).scrollTop() > viewHeight-30 ) {  //ASC
		mn.addClass('main-nav-scrolled'); 
		mn.fadeIn('slow');
	}
	else{
		mn.removeClass('main-nav-scrolled');
		mn.hide();
	}
}); 

//Down button press and scroll to About
$('#down-btn').click(function() {
	var offset = -navHeight*2; //-120 offset XXpx - need to change this for responsive?
	$('html, body').animate({
		scrollTop: $('#about-section').offset().top + offset
	}, 1000);
});

//on click on nav element, animate to the corresponding section of the page
var navElement = $('.main-nav a ');
navElement.click(function(){
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href')).offset().top
	}, 1000);
	return false; 
});


// slick carousel 
$(document).ready(function(){
  $('.single-items').slick({
  	singleitem: true,
  	dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    autoplay: true
  });
});






