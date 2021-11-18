jQuery( document ).ready(function( $ ) {
	// Main banner slider start
	var mainBanner = new Swiper ('.main-banner ', {
		slidesPerView: 1,
		speed: 1500,
		parallax: true,
		autoplay: {
			delay: 3000,
		},
		loop: true,
    // Navigation arrows
    pagination: {
    	el: '.swiper-pagination',
    	clickable: true,
    },
    navigation: {
    	nextEl: '.swiper-button-next',
    	prevEl: '.swiper-button-prev',
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true
});
	// Main banner slider end
	// Service slider start
	var serviceSlider = new Swiper ('.service-slider ', {
		slidesPerView: 3,
		speed: 1000,
		autoplay: {
			delay: 3000,
		},
		loop: false,
		navigation: {
			nextEl: '.service-slider-wrap .swiper-button-next',
			prevEl: '.service-slider-wrap .swiper-button-prev',
		},
		pagination: {
			el: '.swiper-pagination',
			type: 'bullets',
			clickable: true
		},
		observer: true,
		observeParents: true,
		observeSlideChildren: true,
		  // Responsive breakpoints
		  breakpoints: {
		  	767: {
		  		slidesPerView: 1,
		  	},
		  	991: {
		  		slidesPerView: 2,
		  	}
		  }
		});
	// Service slider start
	// Team slider start
	var teamSlider = new Swiper ('.team-slider ', {
		slidesPerView: 4,
		speed: 1000,
		autoplay: {
			delay: 3000,
		},
		loop: false,
    // Navigation arrows
    navigation: {
    	nextEl: '.team-slider-wrap .swiper-button-next',
    	prevEl: '.team-slider-wrap .swiper-button-prev',
    },
    pagination: {
    	el: '.swiper-pagination',
    	type: 'bullets',
    	clickable: true
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
     // Responsive breakpoints
     breakpoints: {
     	767: {
     		slidesPerView: 1,
     	},
     	991: {
     		slidesPerView: 2,
     	},
     	1199: {
     		slidesPerView: 3,
     	}
     }
 });
	// Team slider end
	// Testimonial slider start
	var testimonialSlider = new Swiper ('.testimonial-slider ', {
		slidesPerView: 3,
		speed: 1000,
		loop: false,
    // Navigation arrows
    navigation: {
    	nextEl: '.testimonial-slider-wrap .swiper-button-next',
    	prevEl: '.testimonial-slider-wrap .swiper-button-prev',
    },
    pagination: {
    	el: '.swiper-pagination',
    	type: 'bullets',
    	clickable: true
    },
    observer: true,
    observeParents: true,
    observeSlideChildren: true,
     // Responsive breakpoints
     breakpoints: {
     	767: {
     		slidesPerView: 1,
     	},
     	991: {
     		slidesPerView: 2,
     	}
     }
 });
	// Testimonial slider end
	// Venobox Js Start
	jQuery('.venobox').venobox();
	// Venobox Js End
	// ===== Scroll to Top JS Start====
	$(window).scroll(function() {
	 if ($(this).scrollTop() >= 50) { // If page is scrolled more than 50px
	  $('#return-to-top').fadeIn(200); // Fade in the arrow
	} else {
	  $('#return-to-top').fadeOut(200); // Else fade out the arrow
	}
});
	$('#return-to-top').click(function() { // When arrow is clicked
		$('body,html').animate({
	  scrollTop: 0 // Scroll to top of body
	}, 500);
	});
	// ===== Scroll to Top JS Ends====
});
// Filter Function Js Start
jQuery(function() {
	var selectedClass = "";
	jQuery(".fill-cat").click(function(){
		selectedClass = jQuery(this).attr("data-rel");
		jQuery(".fill-cat").removeClass('active');
		jQuery(this).addClass('active');
		jQuery("#portfolio-blk").fadeTo(100, 0.1);
		jQuery("#portfolio-blk > div").not("."+selectedClass).fadeOut().removeClass('scale-anm');
		setTimeout(function() {
			jQuery("."+selectedClass).fadeIn().addClass('scale-anm');
			jQuery("#portfolio-blk").fadeTo(300, 1);
		}, 300);
	});
});
// Filter Function Js End
// Proper align layout on menu click start
jQuery(document).ready(function(){
	if (jQuery(window).width() > 991) {
		var headerHeight = jQuery('.site-header').outerHeight();
		jQuery('.site-header').parent().css('height', headerHeight)
		jQuery(window).scroll(function () {
			var headerHeight = jQuery('.site-header').outerHeight();
			jQuery('.site-header').parent().css('height', headerHeight)
		});
	}
});
jQuery(window).resize(function() {
	if (jQuery(window).width() > 991) {
		var headerHeight = jQuery('.site-header').outerHeight();
		jQuery('.site-header').parent().css('height', headerHeight)
		jQuery(window).scroll(function () {
			var headerHeight = jQuery('.site-header').outerHeight();
			jQuery('.site-header').parent().css('height', headerHeight)
		});
	}
	else{
		jQuery('.site-header').parent().css('height', 'auto');
		jQuery(window).scroll(function () {
			jQuery('.site-header').parent().css('height', 'auto');
		});
	}
});
// Proper align layout on menu click start
// Fixed header Js start
jQuery(window).scroll(function () {
	jQuery('.site-header').addClass('fixed-nav');
	if (jQuery(document).scrollTop() < 120) {
		jQuery('.site-header').removeClass('fixed-nav');
	}
});
// Fixed header Js end
// Close responsive menu on click start
jQuery(document).ready(function(){
	jQuery(".menu-item a").click(function(){
		jQuery("#navbarSupportedContent").toggleClass("show");
	});
});
// Close responsive menu on click start
// Hamburger menu Js start
jQuery(document).ready(function(){
	jQuery(".hamburger").click(function() {
    	jQuery(this).toggleClass('is-active');
	});
});
// Hamburger menu Js end
