window.sr = new scrollReveal(); //initiate scrollReveal.js

var mn = $(".main-nav");
var viewHeight = $(window).height();
var navHeight = $(".main-nav").height();

var isFirefox = typeof InstallTrigger !== 'undefined';
var isSafari = Object.prototype.toString.call(window.HTMLElement).indexOf('Constructor') > 0;
var isChrome = !!window.chrome && !!window.chrome.webstore;

var alerted = localStorage.getItem('alerted') || '';

if (isFirefox || isSafari || isChrome) {
	console.log('isFirefox', isFirefox);
	console.log('isSafari', isSafari);
	console.log('isChrome', isChrome);
}
else if (alerted != 'yes') {
	alert('This website plays with fun browsers! Please use Chrome, Safari, or Firefox.');
	localStorage.setItem('alerted','yes');
	//$('.otherbrowser').addClass('annoying-browser')
}


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






