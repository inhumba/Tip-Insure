$(function(){

	$('ul.dropdown-menu [data-toggle=dropdown]').on('click', function(event) {
		event.preventDefault();
		event.stopPropagation();
		$(this).parents().find('ul.dropdown-menu').find('li.dropdown').removeClass('open');
		$(this).parent().addClass('open');
	});

	$('.service-figure').on('click', function(event) {
		event.preventDefault();
	});

	// Select
	if (jQuery().select2) {
		$('select.select2').select2();
	}

	//Slider
	if(jQuery().nivoSlider){
		$('#feature-slider').nivoSlider({
			effect: 'random',
			slices: 15,
			boxCols: 8,
			boxRows: 4,
			animSpeed: 500,
			pauseTime: 7000,
			startSlide: 0,
			directionNav: false,
			controlNav: true,
			controlNavThumbs: false,
			pauseOnHover: true,
			manualAdvance: false
		});
	}

	// Mobile nav
	// if(jQuery().mmenu){
	// 	$('#mobilenav').mmenu({
	// 		extensions: ['border-full', 'theme-white', 'multiline', 'effect-slide-menu', 'pageshadow'],
	// 		offCanvas: {
	// 			'position': 'right'
	// 		},
	// 		dividers: true
	// 	});
	// }

	// Totop
	$('.totop').click(function() {
		$('body, html').animate({scrollTop: 0}, 500);
	});

});