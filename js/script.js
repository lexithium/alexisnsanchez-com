// Dynamically load header and footer
$(document).ready(function() {
	var header_position = $('#section-logo').position().top;

	$('.static-navigation').waypoint(function(dir) {
		if(dir === "down") {
			$('.big-sea-emul').animate({
				top: 0
			}, 100);
		} else if(dir === 'up') {
			$('.big-sea-emul').animate({
				top: '-50px'
			}, 100);
		}
	}, {
		offset: function() {
			return -$(this).height();
		}
	});

	if($(document).scrollTop() > header_position) {
		$('.big-sea-emul').animate({
			top: 0
		}, 100);
	}
});
// smooth scroll
$(function() {
	$('a[href*=#]:not([href=#])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
			var target = $(this.hash);
			target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
			if (target.length) {
				$('html,body').animate({
				scrollTop: target.offset().top - 40
				}, 600);
				return false;
			}
		}
	});
});

// navigation
$(document).ready(function(){		
	jQuery("#respon-nav select").change(function() {
		window.location = jQuery(this).find("option:selected").val();
	});
});

// enable masonry from isotope
var $container = $('#web-container-mason');
//initialize
$container.isotope({
	itemSelector: '.project',
	resizeable: false,
	masonry: {
		columnWidth: $container.width()/4
	}
});

// handle the filter buttons
var filterButtons = $('.filter-buttons li a');

filterButtons.click(function() {
	var selector = $(this).attr('data-filter');
	$container.isotope({filter: selector});

	$(document).find('.selected').addClass('dormant');
	$(document).find('.selected').removeClass('selected');

	$(this).removeClass('dormant');
	$(this).addClass('selected');

	return false;
});

//only display online projects in portfolio on phone
var isMobile = (navigator.userAgent.toLowerCase().indexOf('android') > -1) ||
(navigator.userAgent.match(/(iPod|iPhone|iPad|BlackBerry|Windows Phone|iemobile)/));
if(isMobile) {
	$container.isotope({filter: ".online"});
}

// on resize of the page
$(window).resize(function() {
	setTimeout(function() {
		var $container = $('#web-container-mason');
		//initialize
		$container.isotope({
			itemSelector: '.project',
			resizeable: false,
			masonry: {
				columnWidth: $container.width()/4
			}
		});
	},500);
});