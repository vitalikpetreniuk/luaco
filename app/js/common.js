$(function() {
	gmapDiv = $(".map");
	var $menu = $(".header");
    var $menuHeight = $menu.innerHeight;

	//SVG Fallback
	if(!Modernizr.svg) {
		$("img[src*='svg']").attr("src", function() {
			return $(this).attr("src").replace(".svg", ".png");
		});
	};

	$('.fullpage').fullpage({
		responsive: 1024,
		afterLoad: function(anchorLink, index){
			//using index
			if(index == 1 && window.location.pathname == "/"){
				$(".header_desktop .discover").css("display", "none");
			}
		},
		onLeave: function(index, nextIndex, direction){
			if(nextIndex != 1 && window.location.pathname == "/" ){
				$(".header_desktop .discover").css("display", "inline-block");
			}
			else if(index == 2 && direction == 'up' && window.location.pathname == "/" ){
				$(".header_desktop .discover").css("display", "none");
			}
		}
	});

	$(".header_language li.active a").on("click", function(e){

		e.preventDefault();
		$(".header_language").toggleClass("open");
		$(".header_language li:not(.active)").fadeToggle(250);

	});

	$(".video_section .video_play_wrap_in a").on("click", function(){
		$(".video_section .video_wrapper iframe")[0].src += "&autoplay=1";
		setTimeout(function(){
			$(".video_section .video_wrapper").fadeIn(300)
		}, 250);
	});

	$(".header_mobile .menu_open").on("click", function(){
		$(".header_mobile_hidden").fadeIn(300);
	});

	$(".header_mobile .menu_close").on("click", function(){
		$(".header_mobile_hidden").fadeOut(300);
	});

	$(".recepies_header").on("click", function(){
		if(window.innerWidth <= 767){
			$(this).siblings(".info").slideToggle(300);
		}	
	});

	
	$(".gallery_images .image:not(.no_image)").on("click", function(){
        var image = $(this).children("img").data("image");
        var parent = $(this).parent();
        var main_image = parent.siblings(".main_image");
        main_image.find("img").fadeOut(250, function(){
            $(this).attr("src", image).fadeIn(250);
        });
        parent.find(".image").removeClass("active");
        $(this).addClass("active");
    });

    $(".news_header").on("click", function(){
    	if(window.innerWidth <= 767){
			$(this).siblings(".news_text").slideToggle(300);
		}	
    });

    if(gmapDiv.length) {
    	$(".map").gmap3({
	    	address:"Unit 747, 7/f, Star house, 3 Salisbury Road, Tsim Sha Kowloon, Hong Kong",
	    	zoom: 10,
	    	mapTypeId: "shadeOfGrey", // to select it directly
	        mapTypeControlOptions: {
	          mapTypeIds: [google.maps.MapTypeId.ROADMAP, "shadeOfGrey"]
	        },
	        mapTypeControl: false,
	        navigationControl: false,
	        scrollwheel: true,
	        streetViewControl: false
	  	})
	  	.styledmaptype(
	        "shadeOfGrey",
	        [
	          {"featureType":"all","elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#000000"},{"lightness":40}]},
	          {"featureType":"all","elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#000000"},{"lightness":16}]},
	          {"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},
	          {"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":20}]},
	          {"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":17},{"weight":1.2}]},
	          {"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":20}]},
	          {"featureType":"poi","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":21}]},
	          {"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#000000"},{"lightness":17}]},
	          {"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#000000"},{"lightness":29},{"weight":0.2}]},
	          {"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":18}]},
	          {"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":16}]},
	          {"featureType":"transit","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":19}]},
	          {"featureType":"water","elementType":"geometry","stylers":[{"color":"#000000"},{"lightness":17}]}
	        ],
	        {name: "Shades of Grey"}
	  	)
	  	.marker([
	    	{address:"Unit 747, 7/f, Star house, 3 Salisbury Road, Tsim Sha Kowloon, Hong Kong", icon: 'img/map.png'},
		]);
    }

	    

});
