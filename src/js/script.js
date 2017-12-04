$(document).ready(function(){
	$('.grid-carousel').owlCarousel({
	    loop:true,
	    margin:20,
	    nav:true,
	    dots:true,
	    responsive:{
	        0:{
	            items:1
	        },
	        420:{
	            items:2
	        },
	        1000:{
	            items:2
	        }
	    }
	});

	var tabs = $('.tab-head li');
	tabs.click(function(){
		var tabVal = $(this).attr('data-val');
		var tabCont = $('#tabCont .single');

		tabs.removeClass('active');
		$(this).addClass('active');
		tabCont.hide();
		$('#tabCont .single[data-val='+tabVal+']').show();
	})

	$('.hamb').click(function(){
		$(this).toggleClass('open');
		$( ".site-nav" ).stop().slideToggle( "slow" );
	})
});
