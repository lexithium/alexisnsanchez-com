// Dynamically load header and footer
$('#header').load('header.html', function() {
	var header_position = $('#header').position().top + $('#header').outerHeight();

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
$('#footer').load('footer.html');

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
$('.navigation').css('margin-right',$('.web-container').offset().left);
$('#respon-nav').css('margin-right',$('.web-container').offset().left);

$(document).ready(function(){		
	jQuery("#respon-nav select").change(function() {
		window.location = jQuery(this).find("option:selected").val();
	});
});

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

		$('.navigation').css('margin-right',$('.web-container').offset().left);
		$('#respon-nav').css('margin-right',$('.web-container').offset().left);
	},500);
});