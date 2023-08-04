/*

makeCarosel Plugin

Before insert this plugin into html:  You must insert - 'jquery.easing.min.js' and 'jquery.cycle.all.js' plugins

To use: Select element for carosel, then call 'carosel' with arguments

Arguments: (caroselContainer, leftArrowElement, rightArrowElement, hoverContainer)

1. Argumnet - 'caroselContent' is container for carosel
2. Argument - 'leftArrowElement' is left Arrow for click event
3. Argument - 'rightArrowElement' is right Arrow for click event
4. Argument - 'hoverContainer' is container which will trigger when you hover over that container and animation will stop, if we leave that container animation will start again. 

Example  $('ul.shelf > li').carosel('.carousel-wrapper', '.nav-arrow-left', '.nav-arrow-right', '.shelf-wrapper');

*/


$.fn.makeCarosel = function(caroselContainer, leftArrowElement, rightArrowElement, hoverContainer) {

    // Animate in.
    const anim = this;
	anim.animate({ top: 0, left: 0 }, 700, 'easeOutBounce');

	// Carousel
	const $carousel = $(caroselContainer);
	$carousel.cycle({
		fx: 'scrollHorz',
		timeout: 4000,
		speed: 450,
		height: $carousel.height(),
		width: $carousel.width(),
		fit: true
	});

	// Arrow left
	$(leftArrowElement).click(function() {
		$carousel.cycle('prev');
	});

	// Arrow right
	$(rightArrowElement).click(function() {
		$carousel.cycle('next');
	});

	// Get Hover for stop or resume slideshow
	$(hoverContainer).hover(
		function() { $carousel.cycle('pause');},
		function() { $carousel.cycle('resume')}	
	);

	// Set up hover effect.
	this.hover(
		function() { $(this).children('.meta').stop().animate({ bottom: 0 }, 250) },
		function() { $(this).children('.meta').stop().animate({ bottom: -22 }, 100) }
	)

};