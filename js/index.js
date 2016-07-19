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

$(window).scroll(function() {
	var windowPos = $(window).scrollTop(); //number of pixels that are hidden from view above the scrollable area; AKA gets offset of window from top of page
	var windowHeight = $(window).height(); //returns height of viewport
	var docHeight = $(document).height(); //returns height of entire html document (varies based on vh)

	for (var i=0; i < aArray.length; i++) { //for the length of the array (each section of the page)
		theID = aArray[i];
		var divPos = $(theID).offset().top; //get offset of div from top of page
		var divHeight = $(theID).height(); // nelson - use .data() theID isn't being picked up as a jquery object because being pulled as href. get height of div in question

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