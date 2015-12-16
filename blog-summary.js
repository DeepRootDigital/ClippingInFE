$(document).ready(function() {

	$(window).scroll(function() {

		var scrollTop     = $(window).scrollTop(),
    		elementOffset1 = $('#blog-1').offset().top,
    		elementOffset2 = $('#blog-2').offset().top,
    		elementOffset3 = $('#blog-3').offset().top,
    		distance1      = (elementOffset1 - scrollTop),
    		distance2      = (elementOffset2 - scrollTop),
    		distance3      = (elementOffset3 - scrollTop);
    	

    	if (distance1 < 400) {
			$("#blog-1").addClass("active");
			$("#blog-social-1").addClass("active");
			$("#blog-img-1").addClass("active");
    	}

    	if (distance2 < 500) {
			$("#blog-2").addClass("active");
			$("#blog-social-2").addClass("active");
			$("#blog-img-2").addClass("active");
    	}
    	if (distance3 < 500) {
			$("#blog-3").addClass("active");
			$("#blog-social-3").addClass("active");
			$("#blog-img-3").addClass("active");
    	}
    	if (distance1 < 400) {
			$("#blog-img-1").addClass("active");
    	}
    	if (distance2 < 450) {
			$("#blog-img-2").addClass("active");
    	}
    	if (distance3 < 400) {
			$("#blog-img-3").addClass("active");
    	}

	});



});