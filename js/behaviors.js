
window.sr = new scrollReveal(); //initiate scrollReveal.js

var mn = $(".main-nav");
var viewHeight = $(window).height();

//Sticky nav fade in on scroll
$(window).scroll(function() {
	if( $(this).scrollTop() > viewHeight ) { //250 corresponds to body top padding of 250px
		mn.addClass('main-nav-scrolled'); 
		mn.fadeIn('slow');
	}
	else{
		mn.removeClass('main-nav-scrolled');
		mn.hide();
	}
}); 

//Down button press and scroll to About
//how can I do this for other pages? just name #down-btn smth different for each page?
$('#down-btn').click(function() {
	var offset = -95; //offset XXpx - need to change this for responsive?
	$('html, body').animate({
		scrollTop: $('#about-section').offset().top + offset
	}, 1000);
});

//on click on nav element, animate to the corresponding section of the page
var navElement = $('.main-nav a ');
navElement.click(function(){
	$('html, body').animate({
		scrollTop: $( $.attr(this, 'href')).offset().top
	}, 2000);
	return false; 
});

// Nav highlighting and scrolling on click of nav item
// var aChildren = $('nav li').children();
var aChildren = $('nav li').children();
var aArray = [];
var theID;

//for loop that fills aArray with attribute href values
for (var i=0; i < aChildren.length; i++) {
	var aChild = aChildren[i];
	var ahref = $(aChild).attr('href');
	aArray.push(ahref);
}
console.log('aArray: ', aArray);

$(window).scroll(function() {
	var windowPos = $(window).scrollTop(); //number of pixels that are hidden from view above the scrollable area; AKA gets offset of window from top of page
	var windowHeight = $(window).height(); //returns height of viewport
	var docHeight = $(document).height(); //returns height of entire html document (varies based on vh)

	for (var i=0; i < aArray.length; i++) { //for the length of the array (each section of the page)
		theID = aArray[i];
		var divPos = $(theID).offset().top; //get offset of div from top of page
		var divHeight = $(theID).height(); //get height of div in question

		if (windowPos >= (divPos - 100) && windowPos < (divHeight + divPos)) { //if the #px above the window frame >= the distance from the div to the top of page &&
			$("a[href='" + theID + "']").addClass('nav-active');
		}
		else {
			$("a[href='" + theID + "']").removeClass('nav-active');
		}
	}

	if (windowPos + windowHeight == docHeight) {
		if (!$('nav li:last-child a').hasClass('nav-active')) {
			var navActiveCurrent = $('.nav-active').attr('href');
			$("a[href='" + navActiveCurrent + "']").removeClass('nav-active');
			$('nav li:last-child a').addClass('nav-active');
		}
	}
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

// $(document).ready(function(){
//   $('.single-item').slick({
//   	singleitem: true
//     // arrows: true
//   });
// });

// function initCarousel(){
// 	$('.single-item').slick({
// 		dots: true,
// 		prevArrow: '<div class="slick-prev"><i class="fa fa-chevron-left"></i></div>',
// 		nextArrow: '<div class="slick-next"><i class="fa fa-chevron-right"></i></div>',
// 	});
// }
// initCarousel;




