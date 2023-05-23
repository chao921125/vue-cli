/*

Template:  Chondo Hotel
Author: Hastech
Version: 1
Design and Developed by: Hastech
NOTE: If you have any note put here. 

*/
(function($) {
    "use strict";
    
    /*-------------------------------------------
    	01. jQuery MeanMenu
    --------------------------------------------- */
    jQuery('nav#dropdown').meanmenu();
    
    /*-------------------------------------------
    	02. wow js active
    --------------------------------------------- */
    new WOW().init();
	
	/*---------
	   3. Preloader
	------------------------*/
		$(window).on('load', function() {
			$(".preloader").fadeOut("slow");;
		});

	/*---------------------
		4. Mobile menu active
	------------------------*/

	$(window).on('scroll',function() {    
	   var scroll = $(window).scrollTop();
	   if (scroll < 245) {
		$(".sticky-header").removeClass("sticky");
	   }else{
		$(".sticky-header").addClass("sticky");
	   }
	});
	/*--------------------------
		5. Parallax active
	----------------------*/
	$('.header-section.static4').parallax("50%", 0.3);
	
    
    $('.date-picker').datepicker({
            startDate: '-3d'
    });

    $('.select-booking').selectpicker({
      style: 'btn-info',
      size: 4
    });
	/*------------------------------------
	   6. Textilate Activation
	--------------------------------------*/
    $('.tlt').textillate({
        loop: true,
        minDisplayTime: 2500
    });
    /*------------------------------------
	   7. Video Player
    --------------------------------------*/
    $(".player").YTPlayer({
        showControls: false
    });
    
    /*----------------------------
	   8. search button
    ------------------------------ */
	$('.search-open').on('click', function(){
		$('.search-bar').removeClass('slideOutUp').addClass('slideInDown');
	});
	$('.close-search').on('click', function(){
		$('.search-bar').removeClass('slideInDown').addClass('slideOutUp');
        
    });
    /*----------------------------
     9. owl active
    ------------------------------ */  
    $(".carousel-list").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 3,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,3],
	  itemsDesktopSmall : [991,2],
	  itemsTablet: [768,2],
	  itemsMobile : [479,1],
    });  
    $(".our-room-list, .our-news-list, .carousel_list").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 1,
	  /* transitionStyle : "fade", */    /* [This code for animation ] */
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
    });
    $(".testimonial-list").owlCarousel({
      autoPlay: false, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 1,
	  transitionStyle : "backSlide",
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,1],
	  itemsDesktopSmall : [980,1],
	  itemsTablet: [768,1],
	  itemsMobile : [479,1],
    });
    $(".team-brand").owlCarousel({
    autoPlay: false, 
	  slideSpeed:2000,
	  pagination:false,
	  navigation:false,	  
      items : 5,
	  transitionStyle : "backSlide",
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,5],
	  itemsDesktopSmall : [980,4],
	  itemsTablet: [768,3],
	  itemsMobile : [479,2],
    });
     
    $(".team_brand.style2").owlCarousel({
      autoPlay: true, 
	  slideSpeed:2000,
	  pagination:true,
	  navigation:false,	  
      items : 5,
	  transitionStyle : "backSlide",
	  navigationText:["<i class='fa fa-angle-left'></i>","<i class='fa fa-angle-right'></i>"],
      itemsDesktop : [1199,5],
	  itemsDesktopSmall : [980,4],
	  itemsTablet: [768,3],
	  itemsMobile : [479,2],
    });
    
    /*------
       10. video active
    --------*/
    
     $('.show_video').magnificPopup({
            disableOn: 0,
            type: 'iframe',
            mainClass: 'mfp-fade',
            removalDelay: 160,
            preloader: true,

            fixedContentPos: false
        });
    /*----------------
       11. Lightbox active
    --------------*/
     $('.single-gallery-img a, .single_gallery_inner a, .single-gallery-inner a').magnificPopup({
            type: 'image',
            gallery:{enabled:true},
            zoom: {
                 enabled: true,
                 duration: 300,
            }
    });
    /*--------------------------
        12. Counter Up
    ---------------------------- */	
    $('.counter').counterUp({
        delay: 70,
        time: 5000
    }); 
    /*-------------------------------------------
    	13. scrollUp jquery active
    --------------------------------------------- */
    $.scrollUp({
        scrollText: '<i class="fa fa-angle-up"></i>',
        easingType: 'linear',
        scrollSpeed: 900,
        animation: 'fade'
    });
    
    /*-------------------------------------------
    	14. Isotope masonry active
    --------------------------------------------- */
    $(window).on('load', function () {
    //Isotope Activated
		if ($.fn.isotope) {

			$(".our_gallery_item").isotope({
					filter: '*',
					layoutMode: 'packery',
					itemSelector: '.single_gallery',
				});

				$('.gallery-menu-filter li').on('click', function () {
					$(".gallery-menu-filter li").removeClass("active");
					$(this).addClass("active");

					var selector = $(this).attr('data-filter');
					$(".our_gallery_item").isotope({
						filter: selector,
						animationOptions: {
							duration: 0,
							easing: 'linear',
							queue: false,
						}
					});
					return false;
				});


			}
	});
    
	/*----------------------
		15. MailChimp
	------------------------*/
	$('#mc-form').ajaxChimp({
		language: 'en',
		callback: mailChimpResponse,
		// ADD YOUR MAILCHIMP URL BELOW HERE!
		url: 'http://themeshaven.us8.list-manage.com/subscribe/post?u=759ce8a8f4f1037e021ba2922&amp;id=a2452237f8'

	});
	function mailChimpResponse(resp) {

		if (resp.result === 'success') {
			$('.mailchimp-success').html('' + resp.msg).fadeIn(900);
			$('.mailchimp-error').fadeOut(400);

		} else if(resp.result === 'error') {
			$('.mailchimp-error').html('' + resp.msg).fadeIn(900);
		}  
	};
    
})
(jQuery);




