$(function(){

	// Session Storage Signup
	var checkSignup = function() {
		if(sessionStorage.getItem('ss-signup') === 'yes'){
			// console.log('sendtoreplace');
			replaceFormData();
		} else {
			sessionStorage.clear();
			// console.log('clearsignup');
		}
	};

	var replaceFormData = function() {
		var ssData = sessionStorage.getItem('ss-data');
		$('.contact-form input[name="email"]').val(ssData);
		$('.contact-form input[name="is_receive"]').prop('checked', true);
		// console.log('replace');
		sessionStorage.clear();
		// console.log('clear');
	};

	checkSignup();

	var saveFormData = function(formData) {
		sessionStorage.setItem('ss-data', formData);
		sessionStorage.setItem('ss-signup', 'yes');
		// console.log('save');
	};

	$('.signup-form').on('submit', function(){
		var formData = $('.signup-form input[name="signup_email"]').val();
		saveFormData(formData);
	});


	// Royal Slider
	if (jQuery().royalSlider) {
		$('.royalslider').royalSlider({
			autoScaleSlider: true,
			autoScaleSliderWidth: 1440,
			autoScaleSliderHeight: 600,
			imageScaleMode: 'fit',
			imageScalePadding: 0,
			controlNavigation: 'none',
			arrowsNav: true,
			arrowsNavAutoHide: true,
			arrowsNavHideOnTouch: true,
			imgWidth: 1440,
			imgHeight: 600,
			slidesSpacing: 8,
			loop: true,
			controlsInside: true,
			keyboardNavEnabled: false,
			autoHeight: false,
			autoPlay: {
				enabled: true,
				pauseOnHover: true,
				delay: 7000
			}
		});
		$('.royalslider-gallery').royalSlider({
			autoScaleSlider: true,
			autoScaleSliderWidth: 970,
			autoScaleSliderHeight: 500,
			imageScaleMode: 'fit-if-smaller',
			imageScalePadding: 0,
			controlNavigation: 'thumbnails',
			arrowsNav: true,
			arrowsNavAutoHide: true,
			arrowsNavHideOnTouch: true,
			imgWidth: 970,
			imgHeight: 500,
			numImagesToPreload: 2,
			fadeinLoadedSlide: true,
			slidesSpacing: 8,
			loop: false,
			controlsInside: true,
			keyboardNavEnabled: false,
			autoHeight: false,
			autoPlay: {
				enabled: true,
				pauseOnHover: true,
				delay: 7000
			},
			thumbs: {
				spacing: 10,
				arrowsAutoHide: true,
				appendSpan: true,
				firstMargin: true,
				paddingBottom: 4
			}
		});
		$('.royalslider-room').royalSlider({
			autoScaleSlider: true,
			autoScaleSliderWidth: 1140,
			autoScaleSliderHeight: 500,
			imageScaleMode: 'fit',
			imageScalePadding: 0,
			controlNavigation: 'none',
			arrowsNav: true,
			arrowsNavAutoHide: true,
			arrowsNavHideOnTouch: true,
			imgWidth: 1140,
			imgHeight: 500,
			slidesSpacing: 8,
			loop: true,
			controlsInside: true,
			keyboardNavEnabled: false,
			autoHeight: false,
			autoPlay: {
				enabled: true,
				pauseOnHover: true,
				delay: 7000
			}
		});
	}

	// Calendar
	if(jQuery().datepicker){
		var d = new Date();
		var month = d.getMonth()+1;
		var day = d.getDate();
		var today = (day<10 ? '0' : '') + day + '/' + (month<10 ? '0' : '') + month + '/' + d.getFullYear();
		// console.log(output);

		$('input.calendar[name="checkin"]').datepicker({
			format: 'dd/mm/yyyy',
			todayBtn: 'linked',
			autoclose: true
		});
		$('input.calendar[name="date-arrival"]').datepicker({
			format: 'dd/mm/yyyy',
			todayBtn: 'linked',
			autoclose: true,
			startDate: '0d'
			// todayHighlight: true
		});
		$('input.calendar[name="date-departure"]').datepicker({
			format: 'dd/mm/yyyy',
			autoclose: true,
			startDate: '0d',
			datesDisabled: [today]
			// todayHighlight: true
		});
		$('input.calendar[name="date-arrival"]').on('changeDate', function() {
			$('input.calendar[name="date-departure"]').focus();
			// $(this).datepicker('getDates', arg1);
		});
	}

	// Select
	if (jQuery().selectric) {
		$('select.selectric').selectric();
	}

	// Carousel
	if(jQuery().owlCarousel){
		var owl = $('#promotion-carousel');
		owl.owlCarousel({
			items: 2,
			itemsDesktop: [1024,2],
			itemsTablet: [768,2],
			itemsTabletSmall: [767,2],
			itemsMobile: [479,2],
			slideSpeed: 500,
			autoPlay: true,
			stopOnHover: true,
			navigation: false,
			pagination: true
		});
		// $('.next').click(function(){
		// 	owl.trigger('owl.next');
		// });
		// $('.prev').click(function(){
		// 	owl.trigger('owl.prev');
		// });
		var owlmobile = $('#promotion-carousel-mobile');
		owlmobile.owlCarousel({
			items: 2,
			itemsDesktop: [1024,2],
			itemsTablet: [768,2],
			itemsTabletSmall: [767,2],
			itemsMobile: [479,1],
			slideSpeed: 500,
			autoPlay: true,
			stopOnHover: true,
			navigation: false,
			pagination: true
		});
		var promobile = $('#promotion-mobile');
		promobile.owlCarousel({
			items: 1,
			itemsTabletSmall: [767,1],
			itemsMobile: [479,1],
			slideSpeed: 500,
			autoPlay: true,
			stopOnHover: true,
			navigation: false,
			pagination: true,
			autoHeight: true
		});
	}

	// Checkbox
	if (jQuery().iCheck) {
		$('input.icheck').iCheck({
			checkboxClass: 'icheckbox_flat-yellow',
			radioClass: 'iradio_flat-yellow'
		});
	}

	// File Input
	if (jQuery().bootstrapFileInput) {
		$('.file-input').bootstrapFileInput();
	}

	// Validate
	if (jQuery().validate) {
		$('.contact-form').validate({
			errorClass: 'error',
			errorElement: 'small',
			rules: {
				fullname: 'required',
				email: {
					required: true,
					email: true
				},
			comment: 'required',
			captcha: 'required'
			},
			messages: {
				fullname: 'required',
				email: 'required',
				comment: 'required',
				captcha: 'required'
			}
		});
		$('.apply-form').validate({
			errorClass: 'error',
			errorElement: 'small',
			rules: {
				fullname: 'required',
				email: {
					required: true,
					email: true
				},
			phone: 'required',
			resume: 'required',
			captcha: 'required'
			},
			messages: {
				fullname: 'required',
				email: 'required',
				phone: 'required',
				resume: 'required',
				captcha: 'required'
			}
		});
	}

	// Coupon Button
	$('.btn-coupon').click(function() {
		$('.coupon, .btn-coupon').toggleClass('active');
	});

	// var activePanel = function(panelId) {
	// 	$(panelId).on('show.bs.collapse', function() {
	// 		$(panelId + ' .sliding-detail').addClass('active');
	// 	});
	// 	$(panelId).on('hidden.bs.collapse', function() {
	// 		$(panelId + ' .sliding').removeClass('active');
	// 	});
	// };

	// // Career Panel Active
	// $('#career-group .panel-title > a').click(function() {
	// 	var panelId = $(this).attr('href');
	// 	activePanel(panelId);
	// });

	// // Career Apply Toggle
	// $('.sliding-btn').click(function(e) {
	// 	var parentId = $(this).parents('.panel-career').attr('id');
	// 	$('#' + parentId + ' .sliding').toggleClass('active');
	// 	e.preventDefault();
	// });

	// Career Apply Form
	$('.apply').click(function() {
		var dataPosition = $(this).attr('data-position');
		$('#modal-apply .modal-header .position').html(dataPosition);
		$('#modal-apply .modal-body .position').val(dataPosition);
	});

	// Career Delete Form
	// $('.back').click(function(e) {
	// 	var panelId = $(this).attr('href');
	// 	// $('#result').load('content.html #content');
	// 	// $.post('applyform.html', function(data) {
	// 	$(panelId).load('jade/applyform.html #form-data');
	// 	// var $form = $(this),
 //  //   term = $form.find( "input[name='s']" ).val(),
 //  //   url = $form.attr( "action" );
	// 	// $('#' + panelId + ' .sliding').toggleClass('active');
	// 	e.preventDefault();
	// });

	// Lightbox
	if(jQuery().magnificPopup){
		$('.lightbox').each(function() {
			$(this).magnificPopup({
				delegate: 'a',
				type: 'image',
				gallery: {
					enabled: true
				}
			});
		});
	}

	// Mobile nav
	if(jQuery().mmenu){
		$('#mobilenav').mmenu({
			extensions: ['border-full', 'theme-white', 'multiline', 'effect-slide-menu', 'pageshadow'],
			offCanvas: {
				'position': 'right'
			},
			dividers: true
		});
	}

});